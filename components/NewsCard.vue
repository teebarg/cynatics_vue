<template>
  <div class="NewsCard__wrapper">
    <el-card>
      <div class="">
        <img
          src="~/assets/image/pre.jpg"
          class="image"
        />
      </div>
      <div class="content">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <time class="time">{{ $moment(currentDate) }}</time>
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
