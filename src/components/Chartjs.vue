<template>
  <canvas :id="id" :type="type" :data_chart="data_chart"></canvas>
</template>

<script lang='ts'>
import Chart from "chart.js/auto";
import { Vue, Options, Prop } from "vue-property-decorator";
@Options({})
export default class extends Vue {
  @Prop(String) readonly id: any;
  @Prop() readonly type: any;
  @Prop() readonly data_chart: any;

  mounted() {
    console.log(this.data_chart);
    var ctx = document.getElementById(this.id) as HTMLCanvasElement;
    var chartjs = new Chart(ctx, {
      //labels: this.data_chart.data.labels,
      type: this.type,
      data: this.data_chart,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Total Revenue",
            
          },
          legend: {
            display: true,
            position: "bottom",
          },
          tooltips: {
            intersect: true,
          },
          hover: {
            intersect: true,
          },
        },
      },
    });
    chartjs.render();
  }
}
</script>

<style>
</style>