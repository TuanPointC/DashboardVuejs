<template>
  <el-card class="box-card">
    <chart-js
      :id="salesrevenuedata.id"
      :type="salesrevenuedata.type"
      :data_chart="salesrevenuedata.data"
      :options="salesrevenuedata.option"
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
  salesrevenuedata = {
    id: "salesrevenue",
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales Revenue Data",
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
          data: [10, 20, 30, 40, 50, 60, 70],
        },
      ],
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