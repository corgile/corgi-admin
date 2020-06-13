<template>
  <div
    class="footer"
    style="padding: 0 16px;margin: 48px 0 0;text-align: center;"
  >
    <div
      class="copyright"
      style="color: rgba(0, 0, 0, 0.45);font-size: 14px;"
    >
      MADE WITH 💜 by
      <router-link :to="{ name:'About' }">
        <a href="javascript:void(0);">Corgi</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
