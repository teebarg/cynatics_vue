<template>
  <div class="app_container">
    <FormGameBooking :game="data" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    data: {
      type: Object
    },
  },
  methods: {
    ...mapMutations("modal", ["hideModal"])
  }
};
</script>
