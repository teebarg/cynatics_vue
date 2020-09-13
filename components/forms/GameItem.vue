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
      <el-form-item label="Game Date" prop="match_date">
        <el-date-picker
          v-model="form.match_date"
          type="date"
          placeholder="Match Date"
          value-format="yyyy-MM-dd"
          clearable
        />
      </el-form-item>
      <el-form-item label="Result" v-if="mode === 'edit'">
        <el-input v-model="form.result" />
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Competition" prop="competition_id">
        <el-select
          v-model="form.competition_id"
          filterable
          remote
          placeholder="Please enter a keyword"
          :remote-method="querySearchCompetition"
          :loading="loading"
        >
          <el-option
            v-for="item in competitions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Odd" prop="odd_id">
        <el-select
          v-model="form.odd_id"
          filterable
          remote
          placeholder="Please enter a keyword"
          :remote-method="querySearchOdd"
          :loading="loading"
        >
          <el-option
            v-for="item in odds"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Home" prop="home_id">
        <el-select
          v-model="form.home_id"
          filterable
          remote
          placeholder="Please enter a keyword"
          :remote-method="querySearchClub"
          :loading="loading"
        >
          <el-option
            v-for="item in clubs"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Away" prop="away_id">
        <el-select
          v-model="form.away_id"
          filterable
          remote
          placeholder="Please enter a keyword"
          :remote-method="querySearchClub"
          :loading="loading"
        >
          <el-option
            v-for="item in clubs"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-group">
      <el-form-item label="Game Odd">
        <el-input-number
          v-model="form.bookie_odd"
          :precision="2"
          :step="0.1"
        ></el-input-number>
      </el-form-item>
    </div>
    <el-form-item label="Status" v-if="mode === 'edit'">
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
      <el-button type="danger" @click="onSubmit">{{
        mode === "edit" ? "Update" : "Add"
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { GAME_ITEM, CLUB, COMPETITION, ODD } from "~/services/mutants";
import { Rules } from "~/services/constants";

export default {
  async fetch() {
    await this.getClubs({ limit: 100000 });
    await this.getCompetitions();
  },
  props: {
    gameItem: Object,
    mode: {
      type: String,
      default: "add"
    }
  },
  data() {
    return {
      form: {
        match_date: this.gameItem.match_date,
        result: this.gameItem.result,
        home_id: this.gameItem.home_id,
        away_id: this.gameItem.away_id,
        competition_id: this.gameItem.competition_id,
        odd_id: this.gameItem.odd_id,
        game_status_id: this.gameItem.game_status_id,
        market_id: this.gameItem.market_id,
        game_id: this.gameItem.game_id,
        bookie_odd: this.gameItem.bookie_odd || 0
      },
      loading: false,
      rules: {
        match_date: [Rules.SELECT()],
        result: [Rules.NAME("Result")],
        competition_id: [Rules.NAME("Competition")],
        home_id: [Rules.NAME("Home")],
        away_id: [Rules.NAME("Away")],
        odd_id: [Rules.NAME("Odd")]
      }
    };
  },
  computed: {
    ...mapState("odd", ["odds"]),
    ...mapState("club", ["clubs"]),
    ...mapState("competition", ["competitions"]),
    ...mapState("gameStatus", ["game_statuses"])
  },
  watch: {
    gameItem(newValue, old) {
      this.form = { ...this.form, ...newValue };
    }
  },
  methods: {
    ...mapActions("gameItem", [
      GAME_ITEM.CREATE_GAME_ITEM,
      GAME_ITEM.UPDATE_GAME_ITEM
    ]),
    ...mapActions("club", [CLUB.CLUBS]),
    ...mapActions("competition", [COMPETITION.COMPETITIONS]),
    ...mapActions("odd", [ODD.ODDS]),
    onSubmit() {
      this.$refs["form"].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        try {
          if (this.mode === "edit") {
            await this.updateGameItem({
              payload: this.form,
              id: this.gameItem.id
            });
          } else {
            await this.createGameItem(this.form);
          }
          this.$offLoader();
        } catch (error) {
          this.$offLoader();
        }
      });
    },
    async querySearchClub(queryString) {
      this.loading = true;
      await this.getClubs({ name: queryString });
      this.loading = false;
    },
    async querySearchCompetition(queryString) {
      this.loading = true;
      await this.getCompetitions({ name: queryString });
      this.loading = false;
    },
    async querySearchOdd(queryString) {
      this.loading = true;
      await this.getOdds({ name: queryString });
      this.loading = false;
    }
  }
};
</script>
