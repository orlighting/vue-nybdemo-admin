<template>
    <div>
      <div :id="id" :style="{width: width, height: height}"></div>
    </div>
</template>

<script>
import echarts from "echarts"
import westeros from "./theme/westeros"
export default {
  name: "lineEcharts",
  props: {
    id: {
      type: String,
      default: "myChart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    temp1:{

    }
  },
  data () {
    return {
      chart: null,

    }
  },
  mounted () {
    this.initChart()
  },



  methods: {
    initChart () {

      this.chart = echarts.init(document.getElementById(this.id), "westeros")

      this.chart.setOption({
        title: {
          text: "温湿度曲线"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["温度", "湿度"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1号", "2号", "3号", "4号", "5号", "6号", "7号"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "平均温度",
            type: "line",
            stack: "总量",
            data: [this.temp1, this.temp2, this.temp3, this.temp4, this.temp5, this.temp6, this.temp7]
          },
          {
            name: "平均湿度",
            type: "line",
            stack: "",
            data: [this.humi1, this.humi2, this.humi3, this.humi4, this.humi5, this.humi6, this.humi7]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
