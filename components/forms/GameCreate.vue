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
      <el-form-item label="Game Date" prop="game_date">
        <el-date-picker
          v-model="form.game_date"
          type="date"
          placeholder="Bet Date"
          value-format="yyyy-MM-dd"
          clearable
        />
      </el-form-item>
      <el-form-item label="Market" prop="market_id">
        <el-select
          v-model="form.market_id"
          clearable
          filterable
          placeholder="Market"
        >
          <el-option
            v-for="item in markets"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Bet Odd" prop="total_odd">
        <el-input-number
          v-model="form.total_odd"
          :precision="2"
          :step="0.1"
          :max="10"
        ></el-input-number>
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item>
        <el-upload
          class="upload-demo"
          ref="upload"
          drag
          action=""
          :auto-upload="false"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <div class="el-upload__tip" slot="tip">
            xlsx/CSV files with a size less than 500kb
          </div>
        </el-upload>
      </el-form-item>
    </div>
    <div>
      <el-form-item>
        <el-button type="danger" @click="onSubmit">Upload</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { GAME } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  data: () => ({
    form: {
      game_date: "",
      market_id: null,
      total_odd: 0
    },
    selectedMarket: "",
    endpoint: `${process.env.API_URL}/game`,
    fileList: [],
    rules: {
      game_date: [Rules.SELECT()],
      market_id: [Rules.NAME("Market")]
    }
  }),
  computed: {
    ...mapState("market", ["markets"])
  },
  methods: {
    ...mapActions("game", [GAME.CREATE_GAME]),
    onSubmit() {
      this.$refs["form"].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        try {
          let formData = new FormData();
          formData.append("file", this.$refs.upload.uploadFiles[0].raw);
          formData.append("game_date", this.form.game_date);
          formData.append("market_id", this.form.market_id);
          formData.append("total_odd", this.form.total_odd);
          await this.createGame(formData);
          this.$offLoader();
        } catch (error) {
          this.$offLoader();
        }
      });
    }
  }
};
</script>
