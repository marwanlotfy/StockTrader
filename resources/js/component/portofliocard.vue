<template>
<div>
    <div class="card">
    <div class="card-header">
        {{ stockname }}(Price : {{ stockprice }}|quantity :{{stockquantity}})
    </div>
    <div class="card-body">
        <div class="form-group">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Quantity" v-model="quantity" >
        </div>

        <button class="btn btn-primary" @click="sellwithquantity" >sell</button>
    </div>
    </div>
</div>
</template>
<script>
export default {
    props : ['stockname','stockprice','stockquantity'],
    data (){
        return {
            quantity : 0,
        };
    },
    computed:{
        total(){
            return this.quantity*this.stockprice;
        }
    },
    methods : {
        sellwithquantity(){
            if(parseInt(this.quantity)<=parseInt(this.stockquantity) && this.quantity > 0){
            this.$store.commit('selling',{total :this.total,q:this.quantity,n:this.stockname});
            }else{
                alert('Please insert a valid quantity');
            }
            this.quantity=0;
        }
    }


}
</script>
<style scoped>

</style>