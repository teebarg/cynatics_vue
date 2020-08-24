<template>
  <div class="app_container">
    <FormCountry :country="data" :mode="mode" />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    },
    mode: String
  }
};
</script>
