<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter state="permission" action="getPermissions" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>Permissions</h2>
        <div>
          <el-button size="mini" type="primary" @click="onCreate">
            Create Permission
          </el-button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <TablePermission @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { PERMISSION, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getPermissions();
  },
  computed: {
    ...mapState("permission", ["permissions", "pagination"])
  },
  methods: {
    ...mapActions("permission", [
      PERMISSION.PERMISSIONS,
      PERMISSION.DELETE_PERMISSION
    ]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    async onPageChange(page) {
      await this.getPermissions({ page });
    },
    onCreate() {
      this.showModal({
        componentName: "Permission",
        title: "Create Permission"
      });
    },
    onEdit(role) {
      this.showModal({
        componentName: "Permission",
        title: "Edit Permission",
        componentData: role,
        mode: "edit"
      });
    },
    async onDelete(id) {
      this.$setLoader();
      await this.deletePermission(id);
      this.$offLoader();
    }
  },
  metaInfo() {
    return {
      title: "Permission | Glab",
      meta: [
        {
          vmid: "description",
          name: "description",
          content: "This is a cool Description"
        }
      ]
    };
  }
};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
</style>
