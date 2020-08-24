<template>
  <div class="app_container">
    <FormGameCreate />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
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
    ...mapMutations("modal", ["hideModal"])
  }
};
</script>
