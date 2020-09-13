<template>
  <div>
    <FormAdvert :advert="data" :mode="mode" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    data: Object,
    mode: String
  }
};
</script>
