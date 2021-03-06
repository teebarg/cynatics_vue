<template>
  <el-form
    ref="form"
    class="form"
    :model="form"
    label-width="120px"
    size="small"
  >
    <div class="form-group">
      <el-form-item label="Game Date">
        <el-date-picker
          v-model="form.game_date"
          type="date"
          placeholder="Bet Date"
          value-format="yyyy-MM-dd"
          clearable
        />
      </el-form-item>
      <el-form-item label="Game Number">
        <el-input v-model="form.game_number" />
      </el-form-item>
    </div>
    <div class="form-group">
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
      <el-form-item label="Settled">
        <el-switch v-model="form.settled" />
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Bet Odd">
        <el-input-number
          v-model="form.total_odd"
          :precision="2"
          :step="0.1"
        ></el-input-number>
      </el-form-item>
    </div>
    <el-form-item label="Status">
      <el-radio-group v-model="form.game_status_id">
        <el-radio
          v-for="(gs, key) in game_statuses"
          :key="key"
          border
          :label="gs.id"
        >
          {{ gs.status }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" @click="onSubmit">Update</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { GAME } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  props: {
    game: Object
  },
  data: () => ({
    form: {
      game_date: "",
      game_number: null,
      game_status_id: null,
      market_id: null,
      settled: false,
      total_odd: null
    },
    rules: {
      name: [Rules.NAME()],
      alias: [Rules.NAME("Alias")],
      market_id: [Rules.SELECT("Market")]
    }
  }),
  mounted() {
    this.form = { ...this.form, ...this.game };
  },
  computed: {
    ...mapState("market", ["markets"]),
    ...mapState("gameStatus", ["game_statuses"])
  },
  methods: {
    ...mapActions("game", [GAME.UPDATE_GAME]),
    onSubmit() {
      this.$refs["form"].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        await this.updateGame({ payload: this.form, id: this.game.id });
        this.$offLoader();
      });
    }
  }
};
</script>
