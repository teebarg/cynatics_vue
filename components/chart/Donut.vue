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
    caption: "Top 5 countries with Global Oil Reserves",
    subcaption: "MMbbl= One Million barrels",
    enablesmartlabels: "1",
    showlabels: "1",
    numbersuffix: " MMbbl",
    usedataplotcolorforlabels: "1",
    plottooltext: "$label, <b>$value</b> MMbbl",
    theme: "fusion"
  },
  data: [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
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
    type: "doughnut3d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource
  })
};
</script>
