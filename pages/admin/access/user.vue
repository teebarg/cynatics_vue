<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="user" action="getUsers" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Users</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create User
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <TableUser @permission="handlePermission" @role="handleRole" @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { USER, PERMISSION, MODAL } from '~/services/mutants'
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getUsers();
    await this.getPermissions({limit: 1000});
  },
  computed: {
    ...mapState('user', ['pagination'])
  },
  methods: {
    ...mapActions('user', [USER.USERS, USER.DELETE_USER]),
    ...mapActions('permission', [PERMISSION.PERMISSIONS]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "User",
        title: "Create User",
      });
    },
    onEdit(user) {
      this.showModal({
        componentName: "User",
        title: "Edit User",
        componentData: user,
        mode: "edit"
      });
    },
    handleRole(user) {
      this.showModal({
        componentName: "UserRole",
        title: "Manage Roles",
        componentData: user
      });
    },
    handlePermission(user) {
      this.showModal({
        componentName: "UserPermission",
        title: "Manage Permissions",
        componentData: user
      });
    },
    async onPageChange (page) {
      await this.getUsers({ page })
    },
    async onDelete (id) {
      await this.deleteUser(id)
    }
  },
  metaInfo () {
    return {
      title: 'My Sexy Users',
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
