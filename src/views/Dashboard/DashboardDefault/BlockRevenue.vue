<template>
  <div class="chart">
    <el-card class="box-card">
      <chart-js
        :id="revenuedata.id"
        :type="revenuedata.type"
        :data_chart="revenuedata.data"
        :options="revenuedata.option"
      />
    </el-card>
  </div>
</template>

<script lang='ts'>
import ChartJs from "@/components/Chartjs.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
    ChartJs,
  },
})
export default class extends Vue {
  revenuedata = {
    id: "totalrevenue",
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales ($)",
          fill: false,
          backgroundColor: "#d64937",
          borderColor: "#d64937", //find what this is
          data: [2015, 1465, 1487, 1796, 1387, 2123],
        },
        {
          label: "Orders",
          fill: false,
          backgroundColor: "#757575",
          borderColor: "#757575",
          data: [928, 734, 626, 893, 921, 1202],
        },
      ],
    },
    options: {
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
  };
}
</script>

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