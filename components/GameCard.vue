<template>
  <div class="GameCard__wrapper">
    <el-card class="box-card">
      <div class="team">
        <div>
          <ImageDisplay :image="gameItem.home_img" />
        </div>
        <p>{{gameItem.home}}</p>
      </div>
      <div class="details">
        <p>{{$moment(gameItem.game_date)}}</p>
        <p>{{gameItem.odd}}</p>
        <el-button
          size="small"
          type="secondary"
        >
          View Predictions
        </el-button>
      </div>
      <div class="team">
        <div>
          <ImageDisplay :image="gameItem.away_img" />
        </div>
        <p>{{gameItem.away}}</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    gameItem: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
