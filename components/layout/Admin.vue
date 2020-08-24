<template>
  <div class="content__container">
    <template class="filter">
      <slot name="filter"></slot>
    </template>
    <template class="head">
      <slot name="head"></slot>
    </template>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <template class="pagination">
      <slot name="pagination"></slot>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.content__container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content__container > .top {
  display: flex;
  justify-content: space-between;
}
.content__container .body {
  flex: 1 0 50vh;
  overflow: auto;
  margin-bottom: 10px;
}
.content__container .body .el-table {
  height: 100%;
  width: 100%;
}
.content__container > div {
  padding: 10px 0;
}
</style>
