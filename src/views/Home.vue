<template>
  <div class="home">
    <p>{{ $t("hello") }}</p>
    <p>{{ $t("say") }}</p>
    <el-select v-model="value" @change="changeLanguage(value)">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="box" style="width:500px;heighth:500px">
      <canvas id="myChart" ></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import createI18n from "../plugins/i18n";
import Chart from "chart.js/auto";

@Options({
  components: {},
})
export default class Home extends Vue {
  options = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "vi",
      label: "Tieng Viet",
    },
  ];
  value = "en";
  changeLanguage(lang: string) {
    this.$i18n.locale = lang;
  }
  mounted() {
    var ctx = document.getElementById("myChart") as HTMLCanvasElement;
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
    myChart.render();
  }
}
</script>

<style scoped>

</style>