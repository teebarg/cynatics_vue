<template>
  <div class="app_container">
    <header>
      <slot name="header">
        <Header />
      </slot>
    </header>
    <main class="container">
      <div>
        <slot></slot>
      </div>
    </main>
    <template>
      <slot name="footer">
        <Footer />
      </slot>
    </template>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.app_container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: var(--sidebar-background-color)
}
</style>
