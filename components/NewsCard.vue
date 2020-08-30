<template>
  <div class="NewsCard__wrapper">
    <el-card>
      <div class="">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
      </div>
      <div class="content">
        <h3>Yummy hamburger</h3>
        <time class="time">{{ currentDate }}</time>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date()
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
.el-card {
  background-color: var(--background-primary);
  color: var(--text-primary);
}
</style>
