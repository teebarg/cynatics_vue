<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="role" action="getRoles" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Roles</h2>
        <div>
          <el-button size="mini" type="secondary" @click="onCreate">
            Create Role
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <TableRole @permission="handlePermission" @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { ROLE, PERMISSION, MODAL } from '~/services/mutants'
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getRoles();
    await this.getPermissions({limit: 1000});
  },
  computed: {
    ...mapState('role', ['pagination'])
  },
  methods: {
    ...mapActions('role', [ROLE.ROLES, ROLE.DELETE_ROLE]),
    ...mapActions('permission', [PERMISSION.PERMISSIONS]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "Role",
        title: "Create Role",
      });
    },
    onEdit(role) {
      this.showModal({
        componentName: "Role",
        title: "Edit Role",
        componentData: role,
        mode: "edit"
      });
    },
    handlePermission(role) {
      this.showModal({
        componentName: "RolePermission",
        title: "Manage Permissions",
        componentData: role
      });
    },
    async onPageChange (page) {
      await this.getRoles({ page })
    },
    async onDelete (id) {
      await this.deleteRole(id)
    }
  },
  metaInfo () {
    return {
      title: 'My Sexy Roles',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'This is a cool Description'
        }
      ]
    }
  }
}
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
</style>
