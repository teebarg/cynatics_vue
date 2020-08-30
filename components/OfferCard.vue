<template>
  <div class="OfferCard__wrapper">
    <el-card>
      <div class="header">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <p>Up to 30%</p>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem
          ea repellat excepturi. Eligendi illum non doloremque cum cupiditate.
        </p>
      </div>
      <el-button type="primary" size="small">Primary</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
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
