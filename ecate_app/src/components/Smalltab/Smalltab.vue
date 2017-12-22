<template>
  <div>

    <div class="top">
      <div class="top_left"><a href="#"><img src="./title_img_1.jpg" alt=""></a></div>
      <div class="top_right"><a href="#"><img src="./more.jpg" alt=""></a></div>
    </div>
    <div class="top_bottom"><a href="#"><img src="./small_tab_1.jpg" alt=""></a></div>

    <div class="footer_word">
      <p>狮王 猫咪去毛喷剂  防静电 防打结 梳毛轻松</p>
      <span class="cmall"></span>
      <i>68272</i>
      <span class="line">|</span>
      <i>01:53</i>
    </div>

  </div>
</template>

<script>


  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top
    margin-top 10px
    width 100%
    height 72px
    .top_left
      float left
      wdith 187px
      height 72px
      img
        width 187px
        height 100%
    .top_right
      float right
      width 60px
      height 72px
      img
        width 60px
        height 55px
        vertical-align middle
  .top_bottom img
    width 100%
    heihgt 160px

  .footer_word
    width 375px
    height 58px
    padding 10px
    font-size: 12px;
    text-align center
    p
      text-align center
      color #333
      line-height 19px
    .cmall
      display inline-block
      width 10px
      height 9px
      background url("./view-black.png") no-repeat
      background-size 100% 100%
      line-height 19px
    i
      font-style normal
      color #999
    .line
      margin-left: 10px
      margin-right: 10px


</style>
