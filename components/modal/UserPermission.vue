<template>
  <div>
    <FormTransfer
      :sourceData="permissions"
      :targetData="data.permissions"
      title="Permissions"
      @update="update"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { USER } from "~/services/mutants";

export default {
  props: {
    data: Object
  },
  computed: {
    ...mapState("permission", ["permissions"])
  },
  methods: {
    ...mapActions("user", [USER.MANAGE_PERMISSIONS]),
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
