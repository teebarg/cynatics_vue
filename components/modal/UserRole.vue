<template>
  <div>
    <FormTransfer
      :sourceData="roles"
      :targetData="data.roles"
      title="Roles"
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
    ...mapState("role", ["roles"])
  },
  methods: {
    ...mapActions("user", [USER.MANAGE_ROLES]),
    async update(roles) {
      this.$setLoader();
      await this.manageRoles({
        payload: { roles },
        id: this.data.id
      });
      this.$offLoader();
    }
  }
};
</script>
