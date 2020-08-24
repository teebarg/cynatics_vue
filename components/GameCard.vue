<template>
  <div class="GameCard__wrapper">
    <el-card class="box-card">
      <div class="team">
        <div>
          <img src="~/assets/image/club.jpg" alt="Image" />
        </div>
        <p>Arsenal</p>
      </div>
      <div class="details">
        <p>Today</p>
        <p>20:45</p>
        <p>Over 2.5</p>
        <p class="PreviewListItem__meta-link">View Predictions</p>
      </div>
      <div class="team">
        <div>
          <img src="~/assets/image/club.jpg" alt="Image" />
        </div>
        <p>Bayerm</p>
      </div>
    </el-card>
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
