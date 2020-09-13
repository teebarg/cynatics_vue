<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  middleware: ["customer-resource"],
  computed: {
    user() {
      return this.$auth.user;
    }
  }
};
</script>
