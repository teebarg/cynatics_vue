<template>
  <el-dialog :title="modalData.title" :visible.sync="dialogVisible" @close="onClose">
    <component
      v-if="modalData.componentName"
      :is="component"
      :data="modalData.componentData"
      :mode="modalData.mode || ''"
      @close="modalData.onCloseModal"
    ></component>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" size="small" @click="onClose">
        Cancel
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({
    formData: {},
    component: null,
    dialogVisible: false
  }),
  computed: {
    ...mapState("modal", ["modalVisible", "modalData"])
  },
  methods: {
    ...mapMutations("modal", ["hideModal"]),
    ...mapMutations("error", ["clearError"]),
    onClose() {
      this.hideModal();
      this.clearError();
    }
  },
  watch: {
    modalData: {
      immediate: true,
      deep: true,
      handler(modalData) {
        this.dialogVisible = modalData.opened;
        if (!modalData.componentName) return;
        this.component = () =>
          import(`./modal/${modalData.componentName}`);
      }
    }
  }
};
</script>
