<template>
  <div class="OfferCard__wrapper">
    <el-card>
      <div class="header">
        <img :src="getAsset(offer.image)" class="image" />
      </div>
      <div class="content">
        <p>
          {{ offer.message || 'Special Offer for You' }}
        </p>
      </div>
      <nuxt-link :to="offer.url">
        <el-button type="primary" size="small">Claim</el-button>
      </nuxt-link>
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {
    getAsset(e) {
      if (!e) return "/holder.png";
      return process.env.ASSET_URL + e.image;
    }
  },
  props: {
    offer: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
