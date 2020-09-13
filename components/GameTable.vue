<template>
  <div class="Customer__Game--wrapper">
    <div class="details">
      <p>{{game.odd}}</p>
      <p>{{game.odd_type}}</p>
      <p>{{game.home}} - {{game.away}}</p>
      <p v-if="game.game_status != 'active'" class="result">{{game.result}}</p>
    </div>
    <div class="odd">
      <h3>{{game.bookie_odd}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    game: Object
  },
};
</script>
