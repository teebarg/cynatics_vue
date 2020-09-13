<template>
  <nuxt-link to="/" class="tip featured-tip">
    <div class="tip-start">
      <div class="date">{{ $moment(game.game_date) }}</div>
      <div class="time">18:00</div>
    </div>
    <div class="tip-title">
      <h4>{{ game.market_name }}</h4>
      <p class="tip-sub"><span style="font-size:80%">Total Odds:</span> {{ game.total_odd }}</p>
    </div>
    <div style="clear:both;"></div>
  </nuxt-link>
</template>
<script>
export default {
  methods: {},
  props: {
    game: Object
  }
};
</script>
<style>
.featured-tip {
  color: var(--text-primary);
  background-color: var(--background-primary);
  padding: 8px 3px;
}

.featured-tip .tip-start {
  width: 90px;
  margin: 3px 12px;
  -webkit-box-shadow: 0 0 3px #999;
  box-shadow: 0 0 3px #999;
  float: left;
  text-align: center;
}
.tip-start .date {
  background-color: var(--color-coral-500);
  color: var(--color-white);
  padding: 3px;
  font-weight: 700;
  font-size: 13px;
}
.tip-start .time {
  font-size: 22px;
  padding: 3px;
}

.featured-tip .tip-title {
  padding: 6px;
}

.featured-tip .tip-title {
  overflow: hidden;
  text-align: left;
  padding: 6px 0;
}
.featured-tip h4 {
  font-size: 1.1rem;
}

.featured-tip h4 {
  padding: 0;
  margin: 0 0 3px 0;
  font-size: 1.28rem;
}

.featured-tip p.tip-sub {
  font-size: 14px;
}

.featured-tip p.tip-sub {
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: var(--text-secondary);
}
</style>
