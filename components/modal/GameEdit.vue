<template>
  <div class="app_container">
    <FormGameEdit :game="data" />
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
