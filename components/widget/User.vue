<template>
  <div class="Stat__wrapper">
    <div class="demo-type">
      <el-avatar :size="40" src="https://empty" @error="errorHandler">
        <img
          src="/holder.png"
        />
      </el-avatar>
    </div>
    <div>
      <h3>Yiorgos Avraamu</h3>
      <p>Registered: Jan 1, 2015</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  methods: {
    errorHandler(){
      return true;
    }
  }
};
</script>
<style lang="scss" scoped>
.Stat__wrapper {
  display: flex;
  align-items: center;
}
</style>
