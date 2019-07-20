<template>
<div>
    <div class="card">
    <div class="card-header">
        {{ stockname }}(Price : {{ stockprice }})
    </div>
    <div class="card-body">
        <div class="form-group">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Quantity" v-model="quantity" >
        </div>

        <button class="btn btn-primary" @click="buywithquantity" >Buy</button>
    </div>
    </div>
</div>
</template>
<script>
export default {
    props :['stockname','stockprice'],
    data(){
        return {
            quantity : 0,
        }
    },
    computed:{
        total(){
            return this.quantity * this.stockprice;
        }
    },
    methods : {
        buywithquantity(){
            if(this.quantity>0 && this.isvaild(this.total)){
                this.$store.commit('buying',{total :this.total,q :this.quantity,n :this.stockname});
            }else{
                if(!this.isvaild(this.total)){
                    alert('Oops, it seems like you run out of funds');
                }else{
                    alert('Please Enter a valid quantity');
                }
            }
            this.quantity=0;
        },
        isvaild(total){
            if(total<= this.$store.getters.getFunds){
                return true;
            }else{
                return false;
            }

        }
    }

}
</script>
<style scoped>

</style>