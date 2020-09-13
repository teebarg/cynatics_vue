<template>
  <div class="block" style="margin-bottom: 10px">
    <el-carousel direction="vertical" v-if="banners.length">
      <el-carousel-item v-for="(item, key) in banners[0].adverts" :key="key">
        <nuxt-link
          class="home-banner home-banner-1 h-b-image"
          :style="cssVars(item.image)"
          :to="item.url"
        >
          <div class="text-overlay">
            <div class="red-title">
              <div class="home-banner-title">{{ item.message }}</div>
            </div>
          </div>
          <div class="text-overlay-right">
            <div class="home-banner-view">
              View
              <img
                class="red-arrow-icon"
                src="~assets/image/arrow-right-red.png"
                alt="Arrow right"
              />
            </div>
          </div>
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
    <el-carousel v-else direction="vertical" :autoplay="false">
      <el-carousel-item>
        <div class="placeholder">No Banner Avalable</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  methods: {
    cssVars(e) {
      return {
        "--bg-img": `url(${process.env.ASSET_URL + e.image})`
      };
    }
  },
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.h-b-image {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 45%
    ),
    var(--bg-img);
}

.home-banner {
  position: relative;
  display: block;
  padding-bottom: 48%;
  background-size: cover;
  background-position: center top;
  -webkit-box-shadow: 0 0 0.78571rem rgba(33, 33, 33, 0.2);
  box-shadow: 0 0 0.78571rem rgba(33, 33, 33, 0.2);
}
.home-banner-1 .text-overlay {
  position: absolute;
  display: inline-block;
  max-width: 75%;
  bottom: 0;
  padding: 20px;
}
.home-banner-1 .red-title {
  display: table;
  width: auto;
  color: #fff;
  font-weight: 700;
  padding-top: 8px;
  z-index: 3;
}
.home-banner-1 .home-banner-title {
  display: table-cell;
  width: auto;
  vertical-align: middle;
  font-size: 24px;
  line-height: 26px;
}

.home-banner-1 .text-overlay-right {
  position: absolute;
  display: inline-block;
  padding: 20px;
  right: 0;
  bottom: 0;
}

.home-banner-1 .home-banner-view {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.home-banner-1 .red-arrow-icon {
  padding-left: 5px;
}

</style>
