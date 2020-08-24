<template>
  <div>
    <FormGameItem :gameItem="data" :mode="mode" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    data: Object,
    mode: String
  }
};
</script>
