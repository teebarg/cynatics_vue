<template>
  <el-form
    ref="form"
    class="form"
    :model="form"
    label-width="120px"
    size="small"
  >
    <div class="form-group">
      <el-form-item label="Active">
        <el-switch v-model="form.is_active" />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="danger" @click="onSubmit">Update</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { ADSLOT } from "~/services/mutants";

export default {
  props: {
    adSlot: Object
  },
  data: () => ({
    form: {
      is_active: null
    }
  }),
  mounted() {
    this.form.is_active = this.adSlot.is_active;
  },
  methods: {
    ...mapActions("adSlot", [ADSLOT.UPDATE_ADSLOT]),
    onSubmit() {
      this.$refs["form"].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        await this.updateAdSlot({ payload: this.form, id: this.adSlot.id });
        this.$offLoader();
      });
    }
  }
};
</script>
