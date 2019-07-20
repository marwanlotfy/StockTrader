<template>
<div>
    <portfoliocard stockname="BMW" :stockprice="bmwprice" :stockquantity="bmwquantity" v-if="bmwquantity > 0"></portfoliocard>
    <portfoliocard stockname="Google" :stockprice="googleprice" :stockquantity="googlequantity" v-if="googlequantity > 0"></portfoliocard>
    <portfoliocard stockname="Apple" :stockprice="appleprice" :stockquantity="applequantity" v-if="applequantity > 0"></portfoliocard>
    <portfoliocard stockname="Twitter" :stockprice="twitterprice" :stockquantity="twitterquantity" v-if="twitterquantity > 0"></portfoliocard>
    
</div>
</template>
<script>
import portfoliocard from './portofliocard'
export default {
    components : { portfoliocard, },
    computed : {
        bmwquantity (){ 
            return this.$store.getters.getbmwquantity;
        },
        googlequantity (){
            return this.$store.getters.getgooglequantity;
        },
        applequantity (){
            return this.$store.getters.getapplequantity;
        },
        twitterquantity (){
            return this.$store.getters.gettwitterquantity;
        },
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
    }
}
</script>
<style scoped>

</style>