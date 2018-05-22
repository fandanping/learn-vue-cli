<template>
  <div id="app">
    <custom-header></custom-header>
    <router-link to="/medicine/123">medicine</router-link>
    <router-link to="/medicine/456">medicine</router-link>
    <router-link to="/medicine">medicine</router-link>
    <router-link :to="{name:'login'}">login</router-link>
    <transition name="fade">
    <router-view/>
    </transition>
    <router-view name="b"/>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'
export default {
 components:{
   'custom-header':Header,
   'custom-footer':Footer
 },
  mounted(){
   console.log(this.$route)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
/*  margin-top: 60px;*/
}
</style>
