<template>
  <div>
    <el-table
      :data="games"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <GameItem :tableData="props.row.game_items" :gameId="props.row.id" />
        </template>
      </el-table-column>
      <el-table-column label="Date">
        <template slot-scope="scope">
          <p>{{$moment(scope.row.game_date)}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="game_number" label="Code" />
      <el-table-column prop="game_status.status" label="Status" />
      <el-table-column prop="market.name" label="Market" />
      <el-table-column label="Odds">
        <template slot-scope="scope">
          <el-button size="small" type="secondary" @click="manageTag(scope.row)">
            Odds
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="Bookings">
        <template slot-scope="scope">
          <el-button size="small" type="secondary" @click="manageBooking(scope.row)">
            Bookings
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="Settled">
        <template slot-scope="props">
          <el-tag
            :type="props.row.settled ? 'success' : 'danger'"
            disable-transitions
            effect="dark"
            >{{ props.row.settled }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="Action">
        <template slot-scope="scope">
          <TableControl @edit="$emit('edit', scope.row)" @delete="$emit('delete', scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { MODAL } from "~/services/mutants";
import { STATUS } from "~/services/constants";

export default {
  computed: {
    ...mapState("game", ["games"]),
  },
  methods: {
    ...mapMutations("modal", [MODAL.SHOW_MODAL]),
    manageTag(game) {
      this.showModal({componentName: 'GameOdd', title: 'Manage Game Odds', componentData: game})
    },
    manageBooking(game) {
      this.showModal({componentName: 'GameBooking', title: 'Manage Game Booking', componentData: game})
    }
  }
};
</script>
