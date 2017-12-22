<template>
  <div>
    <mt-swipe :auto="4000" class="runner">
      <mt-swipe-item v-for="swipe in menus.datas[0].value"><a href="#"><img :src="swipe.image" alt=""></a></mt-swipe-item>
      <!--<mt-swipe-item><a href="#"><img src="./c02.jpg" alt=""></a></mt-swipe-item>-->
      <!--<mt-swipe-item><a href="#"><img src="./c03.jpg" alt=""></a></mt-swipe-item>-->
      <!--<mt-swipe-item><a href="#"><img src="./c04.jpg" alt=""></a></mt-swipe-item>-->
      <!--<mt-swipe-item><a href="#"><img src="./c05.png" alt=""></a></mt-swipe-item>-->
      <!--<mt-swipe-item><a href="#"><img src="./c06.jpg" alt=""></a></mt-swipe-item>-->
    </mt-swipe>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {


    computed: {
      ...mapState(['menus'])
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .runner
    width 100%
    height 160px
    padding-top 10px
    img
      width 100%
      height 160px
</style>
