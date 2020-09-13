<template>
  <div>
    <el-button type="danger" size="small" @click="onCreate">
      Add Advert
    </el-button>
    <TableAdvert :tableData="tableData" @edit="onEdit" @delete="onDelete" />
  </div>
</template>
<script>
import { ADVERT, MODAL } from "~/services/mutants";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data:() => ({}),
  props: {
    tableData: {
      type: Array,
      default: []
    },
    adSlotId: Number
  },
  methods: {
    ...mapActions("advert", [ ADVERT.DELETE_ADVERT ]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    onCreate() {
      this.showModal({
        componentName: "Advert",
        title: "Add Advert",
        componentData: { ad_slot_id: this.adSlotId },
      });
    },
    onEdit(item) {
      this.showModal({
        componentName: "Advert",
        title: "Edit Advert",
        componentData: item,
        mode: "edit"
      });
    },
    async onDelete(id) {
      await this.deleteAdvert({ id, ad_slot_id: this.adSlotId });
    }
  }
};
</script>
