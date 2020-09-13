<template>
  <div class="app_container">
    <FormAdSlot :adSlot="data" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    data: Object,
  },
  methods: {
    ...mapMutations("modal", ["hideModal"])
  }
};
</script>
