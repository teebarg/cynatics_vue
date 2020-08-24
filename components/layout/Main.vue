<template>
  <App>
    <template v-slot:default>
      <main class="container content">
        <div>
          <slot></slot>
        </div>
        <div>
          <slot name="sidebar"></slot>
        </div>
      </main>
    </template>
  </App>
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
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 20px;
  padding: 15px;
  background: #eeeef0;
}
</style>
