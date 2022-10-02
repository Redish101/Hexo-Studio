<template>
  <d2-container class="page">
    <d2-page-cover>
      <d2-icon-svg class="logo" name="d2-admin"/>
      <template slot="footer">
        <div class="btn-group">
          <span class="btn-group__btn" @click="$open('https://github.com/Redish101/Hexo-Studio')">开源地址</span> |
          <span class="btn-group__btn" @click="$open('https://hexostudio.js.org')">文档地址</span>
        </div>
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
import D2PageCover from './components/d2-page-cover'
export default {
  components: {
    D2PageCover
  }
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
