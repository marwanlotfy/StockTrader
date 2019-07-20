<template>
<div>
    <stockcard stockname="BMW" :stockprice="bmwprice" ></stockcard>
    <stockcard stockname="Google" :stockprice="googleprice" ></stockcard>
    <stockcard stockname="Apple" :stockprice="appleprice" ></stockcard>
    <stockcard stockname="Twitter" :stockprice="twitterprice" ></stockcard>
</div>
</template>
<script>
import stockcard from './stockcard'
export default {
 components: {stockcard},
 computed:{
     bmwprice (){ 
            return this.$store.getters.getbmwprice;
        },
        googleprice (){
            return this.$store.getters.getgoogleprice;
        },
        appleprice (){
            return this.$store.getters.getappleprice;
        },
        twitterprice (){
            return this.$store.getters.gettwitterprice;
        },
 },
}
</script>
<style scoped>

</style>