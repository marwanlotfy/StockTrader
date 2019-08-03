<template>
  <div>
  <navbar></navbar>
  <spinner v-if="active" ></spinner>
  <router-view v-else ></router-view>
  </div>
</template>

<script>
import spinner from './component/spinner'
import navbar from './component/navbar'
export default {
    components : { navbar, spinner },
    computed :{
      active(){
        return this.$store.getters.getloadingstate;
      }
    }
}
</script>

<style>

</style>
