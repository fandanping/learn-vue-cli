<template>
  <div id="app">
    <custom-header></custom-header>
    <p>{{counter}}</p>
    <p>{{fullName}}</p>
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
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  }from 'vuex'
  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'
export default {
 components:{
   'custom-header':Header,
   'custom-footer':Footer
 },
  mounted(){
    console.log("111"+this.$store.state.count)
 /*   this.$store.dispatch('updateCountAsync',{
      num:5,
      time:2000
    })*/
   /* let i=0;
    setInterval(()=>{
      this.$store.commit('updateCount',{
        num:i++,
        num2:2
      });
    },2000)*/

    this.updateCountAsync({
      num:5,
      time:2000
    })
  },
  computed:{
   /* ...mapState(['count']),*/
  /*  ...mapState({
      counter:'count'
    }),*/
    ...mapState({
      counter:(state)=>state.count
    }),
    ...mapGetters({
      'fullName':'fullName',
    })
    /*fullName(){
      return this.$store.getters.fullName
    }*/
  },
  methods:{
    ...mapActions(['updateCountAsync']),
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
