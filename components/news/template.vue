<template>
  <div class="News--template__wrapper">
    <div class="header">
      <slot name="title"> </slot>
      <slot name="link"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.News--template__wrapper {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 10px;
  }

  @media (max-width: 599px) {
    .content {
      grid-template-columns: auto;
      gap: 10px;
    }
  }
}
</style>
