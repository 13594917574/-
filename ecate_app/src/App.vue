<template>
  <div>
    <router-link to="Home"></router-link>
    <router-link to="Types"></router-link>
    <router-link to="Mypet"></router-link>
    <router-link to="Shopcart"></router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <ele-footer></ele-footer>

  </div>
</template>
<script>
  import Footer from './components/Footer/footer'
  import axios from 'axios';


export default {

  mounted () {
    this.$store.dispatch('reqSelect')
    this.$store.dispatch('reqMenus')

  },
  components: {
    "ele-footer": Footer

  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>
