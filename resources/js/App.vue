<template>
  <div>
  <navbar></navbar>
  <router-view></router-view>
  </div>
</template>

<script>
import navbar from './component/navbar'
export default {
    components : { navbar, }
}
</script>

<style>

</style>
