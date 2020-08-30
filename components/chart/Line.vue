<template>
  <div id="chart-container">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataformat="dataFormat"
      :dataSource="dataSource"
    >
    </fusioncharts>
  </div>
</template>
<script>
const dataSource = {
  chart: {
    caption: "Average Traffic to Site",
    subcaption: "[2005-2016]",
    numbersuffix: " K",
    rotatelabels: "1",
    setadaptiveymin: "1",
    xaxisname: "Days",
    yaxisname: "Traffic",
    theme: "gammel"
  },
  data: [
    {
      label: "15",
      value: "89.45"
    },
    {
      label: "16",
      value: "100.87"
    },
    {
      label: "17",
      value: "89.64"
    },
    {
      label: "18",
      value: "90.13"
    },
    {
      label: "19",
      value: "95.67"
    },
    {
      label: "20",
      value: "90.54"
    },
    {
      label: "21",
      value: "85.75"
    },
    {
      label: "22",
      value: "80.8"
    },
    {
      label: "23",
      value: "91.16"
    },
    {
      label: "24",
      value: "91.37"
    },
    {
      label: "25",
      value: "91.66"
    },
    {
      label: "26",
      value: "91.8"
    }
  ]
};
export default {
  props: {
    header: String,
    text: String,
    color: String,
    percentage: Number
  },
  data: () => ({
    type: "line",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource
  })
};
</script>
<style lang="scss" scoped>

</style>
