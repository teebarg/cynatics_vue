<template>
  <App>
    <template v-slot:default>
      <main class="container News--container__wrapper">
        <div class="content NC">
          <div>
            <slot name="header"></slot>
          </div>
          <div>
            <slot name="content"></slot>
          </div>
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
.container {
  background: #eeeef0;
}
.content {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 15px;
  margin: auto;
  width: 75%;
}

.NC > div {
  overflow: auto;
}
</style>
