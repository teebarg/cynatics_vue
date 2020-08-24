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
  data() {
    return {
      beaf: {
        title: "A title",
        default: "A Default title"
      }
    };
  },
  methods: {
    test() {
      alert(5);
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
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
}
</style>
