<template>
  <el-card class="box-card">
    <chart-js
      :id="'weeklysales'"
      :type="'doughnut'"
      :data_chart="weeklysalesdata.data"
      :options="weeklysalesdata.option"
      height="200px"
    />
  </el-card>
</template>

<script lang='ts'>
import { Vue, Options } from "vue-class-component";
import ChartJs from "@/components/Chartjs.vue";
@Options({
  components: {
    ChartJs,
  },
})
export default class extends Vue {
  weeklysalesdata = {
    id: "weeklysales",
    type: "doughnut",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales ($)",
          fill: true,
          backgroundColor: [
            "blue",
            "indigo",
            "red",
            "cyan",
            "green",
            "orange",
            "red darken-1",
          ],
          borderColor: "transparent", //find what this is
          data: [2015, 1465, 1487, 1796, 1387, 2123],
        },
      ],
    },
    options: {
      plugins: {
        maintainAspectRatio: true,
        legend: {
          display: true,
          position: "bottom",
        },
        tooltips: {
          intersect: false,
        },
        hover: {
          intersect: true,
        },
      },
    },
  };
}
</script >

<style scoped lang='scss'>
.box-card {
  height: fit-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: none;
  line-height: 20px;
  background: var(--background-black2);
  margin: 10px 0;
}
</style>