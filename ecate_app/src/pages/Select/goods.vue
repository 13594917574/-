<template>
  <div>
    <div class="goods_wrapper">
      <div class="menu_wrapper" ref="wrapper_left">
        <ul>
          <li v-for="(good, index) in classifyName.categorys" :key="index"
              @click="navIndex(index)">{{good.name}}</li>

        </ul>
      </div>

      <div class="details_wrapper">
        <div class="search_click"><a href="#">热门分类</a></div>
        <div class="details">
          <ul>
            <li>
              <a href="#">
                <div><img src="./d_1.jpg" alt=""></div>
                <p>强化免疫</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div><img src="./d_2.jpg" alt=""></div>
                <p>强化免疫</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div><img src="./d_3.jpg" alt=""></div>
                <p>强化免疫</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div><img src="./d_4.jpg" alt=""></div>
                <p>强化免疫</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div><img src="./d_5.jpg" alt=""></div>
                <p>强化免疫</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div><img src="./d_6.jpg" alt=""></div>
                <p>强化免疫</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    mounted() {
      new BScroll(this.$refs.wrapper_left, {
        scrollY: true
      })
      this.$store.dispatch('reqSelect')

    },
    methods: {
      navIndex(index,ev) {
        console.log ( 'index = ' + index );
        ev=ev||event;
        let listNodes=document.querySelectorAll('.nav-list>li');
        for (let i=0;i<listNodes.length;i++){
          listNodes[i].style.backgroundColor='#fff';
          listNodes[i].style.color='black'
        }
        ev.target.style.backgroundColor='#f3f4f5';
        ev.target.style.color='red';
      }
    },
    computed:{
      ...mapState(['classifyName'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .menu_wrapper
    float left
    /*padding-top 10px*/
    height 627px
    ul
      height 700px
      li
        padding 15px 0
        border-bottom 1px solid #f3f4ff
        width 70px
        height 20px
        font-size 13px
        text-align center
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        background #fff
        &:first-child
          background #f3f4f5
          color red

  .details_wrapper
    margin-top 40px
    margin-left 75px
    box-sizing border-box
    width 300px
    height 300px
    overflow hidden
    .search_click
      display block
      font-size 12px
      padding-left 5px
      margin-top 10px
      margin-bottom 10px
      color #999
    .details
      width 100%
      height 300px
      ul
        width 100%
        height 100%
        padding 5px 5px 20px 5px
      li
        width 90px
        height 115px
        padding 0 5px
        float left
        img
          widht 85px
          height 85px
        p
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          height 20px
          font-size 12px
          text-align center

</style>
