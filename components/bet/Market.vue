<template>
  <a
    href="https://www.freesupertips.com/accumulator-tips/"
    class="tip featured-tip"
    data-component="AnalyticsEvent"
    data-analytics-event-category="Sidebar - Today's Tips"
    data-analytics-event-action="click"
    data-analytics-event-label="Win Accumulator"
    ><div class="tip-start">
      <div class="date">August 17</div>
      <div class="time">18:00</div>
    </div>
    <div class="tip-button hide-500">View Tip</div>
    <div class="tip-title">
      <h4>Accumulator Tip</h4>
      <p class="tip-sub">£10 returns £137.10</p>
      <div class="tip-button show-500">View Tip</div>
    </div>
    <div style="clear:both;"></div>
  </a>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {},
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
.featured-tip {
    color: #3f3f3f;
    background-color: #fff;
    background-size: 100%;
    border-top: 1px solid #f5f5f5;
    padding: 8px 3px;
    display: block;
}
.featured-tip .tip-start {
    margin: 3px 6px;
    background-color: #f5f5f5;
}

.featured-tip .tip-start {
    width: 90px;
    margin: 3px 12px;
    border: 1px solid #fff;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px #999;
    box-shadow: 0 0 3px #999;
    float: left;
    text-align: center;
}
.tip-start .date {
    background-color: #f04a3c;
    color: #fff;
    padding: 3px;
    font-weight: 700;
    font-size: 13px;
}
.tip-start .time {
    font-size: 22px;
    padding: 3px;
}
.featured-tip .tip-button {
    display: none!important;
}

.featured-tip .tip-button {
    float: right;
    width: 90px;
    margin: 12px;
    padding: 10px 0;
    border: 1px solid #fff;
    background-color: #f04a3c;
    color: #fff;
    font-size: 15px;
    text-align: center;
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
    color: #6f6f6f;
}

.featured-tip .tip-button {
    display: none!important;
}

.featured-tip .tip-button {
    float: right;
    width: 90px;
    margin: 12px;
    padding: 10px 0;
    border: 1px solid #fff;
    background-color: #f04a3c;
    color: #fff;
    font-size: 15px;
    text-align: center;
}
</style>
