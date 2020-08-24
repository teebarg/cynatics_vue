<template>
  <div>
    <FormUser :user="data" :mode="mode" />
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
    mode: String
  }
};
</script>
