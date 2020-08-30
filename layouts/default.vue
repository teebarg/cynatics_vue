<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  middleware: ["load-resource"],
  computed: {
    user() {
      return this.$auth.user;
    }
  }
};
</script>
