<template>
  <div>
    <FormCompetition :competition="data" :mode="mode" />
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
