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
export default {};
</script>
<style lang="scss" scoped>
.container {
  background: var(--background-secondary);
}
.content {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 15px;
  margin: auto;
  width: 75%;
}

@media (max-width: 899px) {
  .content {
    padding: 0;
    width: 100%;
  }
}

.NC > div {
  overflow: auto;
}
</style>
