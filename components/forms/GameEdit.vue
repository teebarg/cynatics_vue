<template>
  <el-form
    ref="gameEditForm"
    class="form"
    :model="gameEditForm"
    label-width="120px"
    size="small"
  >
    <div class="form-group">
      <el-form-item label="Game Date">
        <el-date-picker
          v-model="gameEditForm.game_date"
          type="date"
          placeholder="Bet Date"
          value-format="yyyy-MM-dd"
          clearable
        />
      </el-form-item>
      <el-form-item label="Game Number">
        <el-input v-model="gameEditForm.game_number" />
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Market" prop="market_id">
        <el-select
          v-model="gameEditForm.market_id"
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
        <el-switch v-model="gameEditForm.settled" />
      </el-form-item>
    </div>
    <el-form-item label="Status">
      <el-radio-group v-model="gameEditForm.game_status_id">
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
  data() {
    return {
      gameEditForm: {
        game_date: this.game.game_date,
        game_number: this.game.game_number,
        game_status_id: this.game.game_status.id,
        market_id: this.game.market_id,
        settled: this.game.settled || false
      },
      rules: {
        name: [Rules.NAME()],
        alias: [Rules.NAME("Alias")],
        market_id: [Rules.SELECT("Market")]
      }
    };
  },
  computed: {
    ...mapState("market", ["markets"]),
    ...mapState("gameStatus", ["game_statuses"])
  },
  watch: {
    game({ game_date, game_number, game_status, market_id, settled }, old) {
      this.gameEditForm.game_date = game_date;
      this.gameEditForm.game_number = game_number;
      this.gameEditForm.game_status_id = game_status.id;
      this.gameEditForm.market_id = market_id;
      this.gameEditForm.settled = settled;
    }
  },
  methods: {
    ...mapActions("game", [GAME.UPDATE_GAME]),
    onSubmit() {
      this.$refs["gameEditForm"].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        await this.updateGame({ payload: this.gameEditForm, id: this.game.id });
        this.$offLoader();
      });
    },
  }
};
</script>
