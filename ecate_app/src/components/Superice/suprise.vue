<template>
<div>
  <div id="content">
    <!--<div class="page-line"></div>-->
    <div class="daliyRush">
      <img src="./suprice.png"/>
      <span class="text">距本场结束</span>
      <span class="time">00</span>
      <span>:</span>
      <span class="time">00</span>
      <span>:</span>
      <span class="time">00</span>
      <a>
        <img src="./more.jpg">
      </a>
    </div>
  </div>
  <div id="promotionItem"  ref="nav_wrapper">
    <ul>
      <li>
        <a>
          <img src="./a_001.jpg">
          <span class="nowPrice">￥1.20</span>
          <span class="save">省￥10.80</span>
        </a>
      </li>
      <li>
        <a >
          <img src="./a_002.jpg">
          <span class="nowPrice">￥0.99</span>
          <span class="save">省￥8.91</span>
        </a>
      </li>
      <li>
        <a>
          <img src="./a_003.jpg">
          <span class="nowPrice">￥1.00</span>
          <span class="save">省￥9.00</span>
        </a>
      </li>
      <li>
        <a>
          <img src="./a_004.jpg">
          <span class="nowPrice">￥4.29</span>
          <span class="save">省￥38.61</span>
        </a>
      </li>
      <li>
        <a>
          <img src="./a_004.jpg">
          <span class="nowPrice">￥5.30</span>
          <span class="save">省￥47.70</span>
        </a>
      </li>
    </ul>
  </div>


</div>
</template>

<script>
  import BScroll from 'better-scroll';
  
  
  
  export default {
    mounted() {
      new BScroll(this.$refs.nav_wrapper, {
        scrollX: true
      })
    }
  }
  
</script>

<style lang="stylus" rel="stylesheet/stylus">
#content
  .daliyRush
    width 375px
    height 60px
    meigin-left 10px
    img
      float left
      width 105px
      height 24px
      display inline-block
      margin-top 10px
      margin-left -5px

    .text
      float left
      display inline-block
      font-size 13px
      margin-top 15px
      margin-left 5px
      margin-right 10px
    .time
      display inline-block
      border 1px solid
      font-size 12px
      margin-top 15px

    a img
      float right
      display right
      width 67.5px
      height 40px
      margin-top 0

#promotionItem
  width 375px
  height 130px
  content ""
  clear both
  ul
    width 550px
    height 130px
    li
      width 100px
      height 130px
      float left
      margin-left 5px
      a
        width 100px
        height 130px
        text-align center
        display inline-block
        img
          width 85px
          height  85px
          display inline-block
        .nowPrice

          width 35px
          color red
          font-size 14px
          line-height 18px

        .save
          display block
          color: #999;
          font-size 12px

</style>
