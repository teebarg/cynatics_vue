<template>
  <div>
    <el-button type="danger" @click="show = true" size="small">Add</el-button>
    <TableGameBooking
      :tableData="game.bookings"
      @edit="onEdit($event)"
      @delete="onDelete($event)"
    />
    <el-form
      ref="gameBookingForm"
      class="form"
      :model="gameBookingForm"
      :rules="rules"
      size="small"
      v-if="show"
    >
      <div class="form-group">
        <el-form-item prop="bookmaker_id">
          <el-select
            v-model="gameBookingForm.bookmaker_id"
            placeholder="Select Bookmaker"
          >
            <el-option
              v-for="item in bookmakers"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="booking_number">
          <el-input
            placeholder="Booking number"
            v-model="gameBookingForm.booking_number"
            size="small"
          />
        </el-form-item>
      </div>
      <div class="center-row control">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="onCancel">Cancel</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { BOOKMAKER_GAME } from "~/services/mutants";
export default {
  props: {
    game: Object
  },
  data:() => ({
    gameBookingForm: {
      booking_number: "",
      bookmaker_id: null
    },
    show: false,
    rules: {
      bookmaker_id: [
        {
          required: true,
          message: "Please Select a Bookmaker",
          trigger: "blur"
        }
      ],
      booking_number: [
        {
          required: true,
          message: "Please enter a Booking Number",
          trigger: "blur"
        }
      ]
    }
  }),
  computed: {
    ...mapState("market", ["markets"]),
    ...mapState("bookmaker", ["bookmakers"])
  },
  methods: {
    ...mapActions("bookmakerGame", [
      BOOKMAKER_GAME.CREATE_BOOKMAKER_GAME,
      BOOKMAKER_GAME.DELETE_BOOKMAKER_GAME
    ]),
    onSubmit() {
      this.$refs["gameBookingForm"].validate(async valid => {
        if (!valid) {
          return false;
        }
        this.$setLoader();
        await this.createBookmakerGame({
          id: this.game.id,
          ...this.gameBookingForm
        });
        this.$offLoader();
      });
    },
    onEdit({ pivot }) {
      this.gameBookingForm = { ...pivot };
      this.show = true;
    },
    async onDelete({ pivot: { bookmaker_id } }) {
      this.$setLoader();
      await this.deleteBookmakerGame({ id: this.game.id, bookmaker_id });
      this.$offLoader();
    },
    onCancel() {
      this.show = false;
      this.gameBookingForm = {
        booking_number: "",
        bookmaker_id: null
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.control {
  width: fit-content;
}
.control div:first-child {
  margin-right: 10px;
}
.booking_list {
  display: flex;
}
.form {
  margin-top: 15px;
}
</style>
