<template>
<div>
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Trade or View Your Portfolio</h5>
    <p class="card-text">You may Save and load data <br> click on end day to end that day.</p>
    <hr>
    <h1> Your Funds:$ {{Funds}}</h1>
  </div>
</div>
</div>
</template>
<script>
export default {
    computed : {
        Funds (){
            return this.$store.getters.getFunds;
        }
    }

}
</script>
<style scoped>

</style>