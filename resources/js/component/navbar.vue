<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" to="/">Stock Trader </router-link>
      <button @click="togglenav" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  <div :class="{show : navactive}" class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
        <router-link class="nav-item" to="/stock" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
    </ul>
      <ul class="nav navbar-nav navbar-right" >
      <li class="nav-item">
        <a class="nav-link" style="cursor: pointer;" @click="EndDay">End Day</a>
      </li>
      <li class="nav-item dropdown " :class="{'show':active}" >
        <a   @click="triggerActive" style="cursor:pointer;" class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="active" >
          Save and load        </a>
     
      <div class="dropdown-menu"  :class="{'show':active}" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="save" style="cursor:pointer;">Save</a>
              <a class="dropdown-item" @click="load" style="cursor:pointer;">load</a>
      </div>
       </li>
      <li class="nav-item" >
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Funds : ${{ Funds }}</a>
      </li>
      </ul>
  </div>
</nav>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            active : false,
            navactive : false,
        }
    },
    computed : {
      Funds(){
        return this.$store.getters.getFunds;
      }
    },
    methods : {
        ...mapActions([
          'savestate',
          'loadstate'
        ]),
        triggerActive(){
            this.active= !this.active;
        },
        EndDay(){
          this.$store.commit('endday');
        },
        save(){
          this.savestate();
          this.active = false;
        },
        load(){
          this.loadstate();
          this.active=false;
        },
        togglenav(){
          this.navactive = !this.navactive;
        }
    }

}
</script>
<style >
body{
  padding: 15px;
}
</style>