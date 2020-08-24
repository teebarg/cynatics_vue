<template>
  <div class="app_container">
    <FormClub :club="data" :mode="mode" />
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
