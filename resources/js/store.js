import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state : {
        Funds : 10000,
        BMW : { quantity : 0 ,price : 110 },
        Google : { quantity : 0 , price : 200 },
        Apple : { quantity : 0 ,price : 250 },
        Twitter : { quantity : 0 ,price :8 },
        loading : false,
    },
    getters : {
        getFunds (state){
            return state.Funds;
        },
        getbmwquantity (state){
            return state.BMW.quantity;
        }, 
        getgooglequantity (state){
            return state.Google.quantity;
        }, 
        getapplequantity (state){
            return state.Apple.quantity;
        }, 
        gettwitterquantity (state){
            return state.Twitter.quantity;
        }, 
        getbmwprice (state){
            return state.BMW.price;
        }, 
        getgoogleprice (state){
            return state.Google.price;
        }, 
        getappleprice (state){
            return state.Apple.price;
        }, 
        gettwitterprice (state){
            return state.Twitter.price;
        }, 
        getloadingstate (state){
            return state.loading;
        }
    },
    mutations : {
        buying(state,payload){
            state.Funds -= payload.total;
            state[payload.n].quantity+=parseInt(payload.q);
        },
        selling(state,payload){
            state.Funds += payload.total;
            state[payload.n].quantity-=parseInt(payload.q);
        },
        endday(state){
            let BMW = Math.round((Math.random()*1000)/4);
            let Google = Math.round((Math.random()*1000)/4);
            let Apple = Math.round((Math.random()*1000)/4);
            let Twitter = Math.round((Math.random()*1000)/4);
            state.BMW.price=BMW;
            state.Google.price=Google;
            state.Apple.price=Apple;
            state.Twitter.price=Twitter;
        },
        changeloadingstate(state){
            state.loading = !state.loading;
        }
    },
    actions : {
        savestate(context){
            context.commit('changeloadingstate');
            axios.post('/savestate', {
                BMW : context.state.BMW.price,
                Google : context.state.Google.price,
                Apple : context.state.Apple.price,
                Twitter : context.state.Twitter.price,
              })
              .then(function (response) {
                console.log(response);
                context.commit('changeloadingstate');
              })
              .catch(function (error) {
                console.log(error);
                context.commit('changeloadingstate');
              });

        },
        loadstate(context){
            context.commit('changeloadingstate');
            axios.get('/loadstate')
            .then(function (response) {
                console.log(response);
                context.commit('changeloadingstate');
                context.state.BMW.price=response.data.BMW;
                context.state.Google.price=response.data.Google;
                context.state.Apple.price=response.data.Apple;
                context.state.Twitter.price=response.data.Twitter;       
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                context.commit('changeloadingstate');
            })
        },
    }
})  