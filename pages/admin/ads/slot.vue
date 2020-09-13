<template>
  <LayoutAdmin>
    <template v-slot:filter>
      <FormFilter :name="false" state="adSlot" action="getAdSlots" />
    </template>
    <template v-slot:head>
      <div class="top">
        <h2>AdSlots</h2>
      </div>
    </template>
    <template v-slot:body>
      <TableAdSlot @edit="onEdit" @delete="onDelete" />
    </template>
    <template v-slot:pagination>
      <Pagination :pagination="pagination" @pageChange="onPageChange" />
    </template>
  </LayoutAdmin>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { ADSLOT, MODAL } from "~/services/mutants";
import { Layout } from "~/services/constants";

export default {
  layout: Layout.ADMIN,
  async fetch() {
    await this.getAdSlots();
  },
  computed: {
    ...mapState("adSlot", ["pagination"])
  },
  methods: {
    ...mapActions("adSlot", [
      ADSLOT.ADSLOTS,
      ADSLOT.DELETE_ADSLOT
    ]),
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    async onPageChange(page) {
      await this.getAdSlots({ page });
    },
    onEdit(adSlot) {
      this.showModal({componentName: 'AdSlot', title: 'Edit AdSlot', componentData: adSlot})
    },
    async onDelete(id) {
      await this.deleteAdSlot(id);
    }
  },
  head() {
    return {
      title: "AdSlot|Manage Adss",
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
