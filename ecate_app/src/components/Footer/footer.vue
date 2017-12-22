<template>
  <div>
    <div class="footer" >
      <ul class="all_pages">
        <li id="main-page" :class="activePink" @click="isActive('1')" ref="listOne">
          <router-link to="/home">
            <a href="#">
              <div></div>
            </a>
          </router-link>
        </li>
        <li id="type-page" @click="isActive('2')" ref="listTwo">
          <router-link to="/select">
            <a href="#">
              <div></div>
            </a>
          </router-link>
        </li>
        <li id="shopping-cart" @click="isActive('3')" ref="listThree">
          <router-link to="/shopcart">
            <a href="#">
              <div></div>
            </a>
          </router-link>
        </li>
        <li id="register-page" @click="isActive('4')" ref="listFour">
          <router-link to="/mypets">
            <a href="#">
              <div></div>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {

//    el: '.footerTool',
    data () {
      return {
        activePink: 'activePink'
      }
    },
    methods: {
      //控制tab颜色
      isActive(move){
        if (move==='1'){
          this.$refs.listOne.className="activePink"
          this.$refs.listTwo.className=" "
          this.$refs.listThree.className=" "
          this.$refs.listFour.className=" "
        }else if (move==='2'){
          this.$refs.listOne.className=" "
          this.$refs.listTwo.className="activePink"
          this.$refs.listThree.className=" "
          this.$refs.listFour.className=" "
        } else if (move==='3'){
          this.$refs.listOne.className=" "
          this.$refs.listTwo.className=" "
          this.$refs.listThree.className="activePink"
          this.$refs.listFour.className=" "
        } else {
          this.$refs.listOne.className=" "
          this.$refs.listTwo.className=" "
          this.$refs.listThree.className=" "
          this.$refs.listFour.className="activePink"
        }
      }
    },
    components: {

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


  .footer
    position fixed
    bottom 0
    z-index 99
    width 100%
    height 45px
    background #fff
    overflow hidden
    .all_pages
      height 44px
      width 100%
      z-index 99
      margin 0 auto
      background #fff
      border-top 1px solid #e7e7e7
      li
        float: left
        width 25%
        height 100%
        text-align register-page
        line-height 45px

        a
          display block
          height 100%
          width 100%
          div
            width 42px
            height 40px
            margin 2px auto 0
            background url(./bottom.png) no-repeat
            background-size 234px 163px
        &#main-page
          a
            div
              background-position -85px 0
        &#type-page
          a
            div
              background-position -85px -41px
        &#shopping-cart
          a
            div
              background-position -85px -81px
        &#register-page
          a
            div
              background-position -85px -122px


        &#main-page.activePink
          a
            div
              background-position -42px 0
        &#type-page.activePink
          a
            div
              background-position -42px -41px
        &#shopping-cart.activePink
          a
            div
              background-position -42px -81px
        &#register-page.activePink
          a
            div
              background-position -42px -122px



</style>
