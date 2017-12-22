<template>
  <div>
    <div class="wrapper">

      <div class="header_wrapper">

        <div class="header">
          <div class="header_left">
            <a href="#">
              <span class="cat">猫猫站</span>
              <span class="center">|</span>
              <span class="address">重庆</span>
            </a>
          </div>
          <div class="header_right">
            <a href="#" class="search">
              <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <img src="./search.png" alt="">
            </a>
            <a href="#" class="mydope"><img src="./mydope.png"></a>
          </div>
        </div>
        <div class="nav" ref="nav_wrapper">
          <ul class="dscroll-ul">
            <li class="dscroll-li" v-for="nav in menus.menus">
              <a href="#">
                <span class="rela">{{nav.menu_name}}</span>
                <span class="rela_line"></span>
              </a>
            </li>

          </ul>

        </div>

      </div>

      <div class="total">
        <runner></runner>

        <div class="sprite">
          <ul>
            <li v-for="sprite in menus.datas[1].menus"><a href="#"><img :src="sprite.image" alt=""></a></li>
          </ul>
        </div>

        <suprise></suprise>

        <div>
          <div class="e_top" v-for="pic in menus.datas[5].content_images">
            <a href="#"><img :src="pic.image" alt=""></a>
          </div>
          <div class="e_top_01">
            <div class="e_left">
              <a href="#"><img src="./1.jpg" alt=""></a>
            </div>
            <div class="e_right">
              <a href="#"><img src="./e_r_1.jpg" alt=""></a>
              <a href="#"><img src="./e_r_2.jpg" alt=""></a>
            </div>
          </div>
        </div>

        <smalltab></smalltab>
        <div class="small_video">
          <div class="small_video_top">

          </div>
        </div>
        <runner></runner>

        <div class="bottom">
          <img src="./bottom_img_1.jpg" alt="">
          <div class="bottom_t">
            <span class="touch">触屏版</span>
            <span><a href="#">手机客户端</a></span>
            <span><a href="#">关于我们</a></span>
            <span><a href="#">联系我们</a></span>
          </div>
          <div class="bottom_b">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>

      </div>


    </div>
  </div>






</template>

<script>
import runner from '../../components/Runner/Runner'
import smalltab from '../../components/Smalltab/Smalltab'
import suprise from '../../components/Superice/suprise'
import BScroll from 'better-scroll'
import {mapState} from 'vuex';

export default {

  mounted() {
    new BScroll(this.$refs.nav_wrapper, {
      scrollX: true
    })

  },
  computed: {
    ...mapState(['menus'])
  },



  components: {
    runner,
    smalltab,
    suprise
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.wrapper
  overflow hidden
  .header_wrapper
    position fixed
    z-index 99
    background #fff
    margin-bottom 50px
    .header
      position relative
      width 100%
      height 30px
      padding 10px 5px 10px 5px
      .header_left
        overflow hidden
        display inline-block
        text-align center
        height 20px
        width 90px
        padding-top 10px
        span
          display inline-block
          font-size 14px
          color: #898989
          margin-right 1px
          .address
            font-size 13px
      .header_right
        position relative
        display inline-block
        float right
        width 70%
        height 30px
        margin-top 5px
        padding-left 5px

        .search
          position relative
          width 80%
          height 25px
          vertical-align bottom
          input
            width 80%
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            font-size 13px
          img
            position absolute
            width 11px
            height 11px
            left 190px
            top 2px
        .mydope img
          width 25px
          height 25px
          margin-left 5px
          vertical-align middle



    .dscroll-ul
      width 140%
      height 36px
      overflow hidden
      display block
      content ""
      clear both
      .dscroll-li
        float left
        width 74px
        height 36px
        text-align center
        &:first-child
          a
            color red
        .rela_line
          display inline-block
          position absolute
          left 12px
          bottom 0
          width 50px
          height 2px
          background red



  .total
    margin-top 80px
    .sprite
      margin-bottom 30px
      width 100%
      height 190px
      ul li
        width 100%
        height 100%
        a
          width 75px
          height 95px
          img
            display inline-block
            float left
            width 75px
            height 95px

    .e_top a
      display inline-block
      width 100%
      height 185px
      img
        margin-top 10px
        width 100%
        height 185px
    .e_top_01
      width 100%
      height 249px
      .e_left
        float left
        width 187px
        height 249px
        img
          width 187px
          height 249px
      .e_right
        float right
        width 187px
        height 125px
        img
          width 187px
          height 125px
    .bottom
      margin-top 50px
      margin-bottom 90px
      width 100%
      height 90px
      img
        width 100%
        height 30px
      .bottom_t
        font-size 14px
        padding 15px 0 5px
        text-align center
        span
          padding-right 10px
        .touch
          color red
      .bottom_b
        margin 10px 10px 0 10px
        font-size 12px
        text-align center




</style>
