<template>
  <div>
    <div class="wrapper">
      <div class="header border-1px">
        <div class="header_tab">
          <router-link to="/select/goods">
            <span class="tab_left" :class="{tab_color_l:isLeft}" @click="showIn(1)">分类</span>
            <span class="line_left" v-show="isShowOne" ></span>
          </router-link>
          <router-link to="/select/brand">
            <span class="tab_right" :class="{tab_color_r:isRight}" @click="showIn(2)">品牌</span>
            <span class="line_right" v-show="isShowTwo" ></span>
          </router-link>
          <a href="#"><img src="./search.png" alt=""></a>
        </div>


      </div>




      <router-view></router-view>



    </div>
  </div>
</template>

  <script>
  import BScroll from 'better-scroll'


  export default {

    data () {
      return {
        isShowOne: true,
        isShowTwo: false,
        isLeft: true,
        isRight: false
      }
    },
    methods: {
      showIn (click) {
        if(click===1 && this.isShowOne==true && this.isLeft==true){
          return
        }else if (click===2 && this.isShowTwo==true && this.isRight==true){
          return
        }else{
          this.isShowOne = !this.isShowOne
          this.isShowTwo = !this.isShowTwo
          this.isLeft = !this.isLeft
          this.isRight = !this.isRight
        }

      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../commont/stylus/mixin.styl"
  .wrapper
    overflow hidden
    .header
      position fixed
      z-index 99
      width 100%
      height 40px
      padding 0 15px 1px 15px
      background #fff
      .header_tab
        position relative
        width 100%
        font-size 13px
        text-align center
        line-height 40px
        border-1px(#f3f5f7)
        .tab_left
          position relative
          display inline-block
          width 40%
          height 40px
        .tab_color_l
          color red
        .line_left
          display inline-block
          position absolute
          left 78px
          bottom 0
          width 50px
          height 2px
          background red
        .line_right
          display inline-block
          position absolute
          left 232px
          bottom 0
          width 50px
          height 2px
          background red
        .tab_right
          display inline-block
          width 40%
          height 40px
        .tab_color_r
          color red
        img
          vertical-align middle
          width 14px
          height 14px





</style>
