<template>
  <div>
    <FormTransfer
      :sourceData="permissions"
      :targetData="data.permissions"
      @update="update"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { ROLE } from '~/services/mutants'

export default {
  props: {
    data: Object
  },
  computed: {
    ...mapState("permission", ["permissions"])
  },
  methods: {
    ...mapActions("role", [ROLE.MANAGE_PERMISSIONS]),
    async update(permissions) {
      this.$setLoader();
      await this.managePermissions({
        payload: { permissions },
        id: this.data.id
      });
      this.$offLoader();
    }
  }
};
</script>
