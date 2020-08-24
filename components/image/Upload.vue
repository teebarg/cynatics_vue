<template>
  <el-upload
    class="a-uploader"
    action=""
    :auto-upload="true"
    :before-upload="beforeAvatarUpload"
  >
    <el-image
      slot="trigger"
      fit="contain"
      :src="asset"
      class="el-avatar el-avatar--circle"
    >
      <div slot="placeholder" class="image-slot">
        <img
          src="/holder.png"
        />
      </div>
      <div slot="error" class="el-avatar el-avatar--circle">
        <img
          src="/holder.png"
        />
      </div>
    </el-image>
    <el-button
      type="success"
      style="margin-left: 10px;"
      size="small"
      @click="submitUpload"
      v-if="upload"
      icon="el-icon-upload"
    ></el-button>
  </el-upload>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { IMAGE } from "~/services/mutants";
import { STATUS } from "~/services/constants";
export default {
  data() {
    return {
      dialog: false,
      asset: process.env.ASSET_URL + this.imageData.image,
      upload: null
    };
  },
  props: {
    mode: {
      type: String,
      default: "add"
    },
    action: String,
    model: String,
    imageData: {
      type: Object,
      default: () => ({
        id: null,
        image: "",
        imageId: null
      })
    }
  },
  watch: {
    imageData(newValue, oldValue) {
      this.asset = process.env.ASSET_URL + newValue.image;
    }
  },
  methods: {
    ...mapActions("image", [IMAGE.CREATE_IMAGE, IMAGE.UPDATE_IMAGE]),
    edit(game) {
      this.formData = game;
      this.dialogFormVisible = true;
    },
    async submitUpload() {
      let formData = new FormData();
      formData.append("image", this.upload);
      if (!this.imageData.image) {
        formData.append("model", this.model);
        formData.append("target", this.imageData.id);
        await this.createImage({ formData, action: this.action });
      } else {
        await this.updateImage({ formData, imageId: this.imageData.image_id });
      }
      this.upload = null;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("File must be in Jpeg or png");
        return false;
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
        return false;
      }

      this.upload = file;
      this.asset = URL.createObjectURL(file);
      return false;
    },
    errorHandler() {
      return true;
    }
  }
};
</script>
<style>
.a-uploader {
  display: flex;
  align-items: center;
}
</style>
