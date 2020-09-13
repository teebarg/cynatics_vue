<template>
  <el-form
    ref="form"
    class="form"
    :model="form"
    :rules="rules"
    label-width="120px"
    size="small"
  >
    <div class="form-group">
      <el-form-item label="Url" prop="url">
        <el-input v-model="form.url" />
      </el-form-item>
      <el-form-item label="Target">
        <el-select v-model="form.target" placeholder="Target">
          <el-option
            v-for="item in targets"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Message">
        <el-input type="textarea" v-model="form.message"></el-input>
      </el-form-item>
      <el-form-item label="Active">
        <el-switch v-model="form.is_active" />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="danger" @click="onSubmit">{{
        mode === "edit" ? "Update" : "Add"
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { ADVERT } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  props: {
    advert: Object,
    mode: {
      type: String,
      default: "add"
    }
  },
  data() {
    return {
      form: {
        is_active: this.advert.is_active || true,
        url: this.advert.url,
        target: this.advert.target || "_self",
        ad_slot_id: this.advert.ad_slot_id,
        message: this.advert.message
      },
      loading: false,
      targets: [
        { name: "Same Page", value: "_self" },
        { name: "New Page", value: "_blank" }
      ],
      rules: {
        url: [Rules.NAME("Url")]
      }
    };
  },
  computed: {
    ...mapState("adSlot", ["adSlots"])
  },
  watch: {
    advert(newValue, old) {
      this.form = { ...this.form, ...newValue };
    }
  },
  methods: {
    ...mapActions("advert", [ADVERT.CREATE_ADVERT, ADVERT.UPDATE_ADVERT]),
    onSubmit() {
      this.$refs["form"].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        try {
          if (this.mode === "edit") {
            await this.updateAdvert({
              payload: this.form,
              id: this.advert.id
            });
          } else {
            await this.createAdvert(this.form);
          }
          this.$offLoader();
        } catch (error) {
          this.$offLoader();
        }
      });
    }
  }
};
</script>
