<template>
  <div>
    <div class="brand_wrapper" >
      <div class="brands" v-for="name in classifyName.brand">
        <div class="line">—— {{name.title}} ——</div>
        <ul>
          <li v-for="brand in name.list">
            <a href="#">
              <div>
                <img :src="brand.logo" alt="">
              </div>
                <p class="brand_top">{{brand.name}}</p>
                <p class="brand_bottom">{{brand.address}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('reqSelect')

    },
    computed:{
      ...mapState(['classifyName'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .brand_wrapper
    margin-top 40px
    .line
      width 100%
      padding-top 30px
      text-align center
      font-size 12px
      color #999
      margin-bottom 10px
    .brands
      width 100%
      height 100%

      ul
        width 100%
        height 100%
        li
          width 30%
          height 105px
          padding 0 5px
          margin-top 10px
          padding-bottom 5px
          float left
          a
            width 100%
            height 100%
            div
              padding 10px 10px 10px 10px
              height 40px
              border 1px solid #e2e2e2
              margin-bottom 5px
              img
                max-width 80px
                height 40px
            .brand_top,.brand_bottom
              font-size 13px
              color #333
              height 20px
              margin -top 5px
              text-align center
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .brand_bottom
              color #999
</style>
