<template>
  <div>
    <statistics />
    <el-row :gutter="20">
      <el-col :md="(span = 16)">
        <revenue />
        <calendar />
        <sales />
      </el-col>
      <el-col :md="(span = 8)">
        <dailyfeed />
        <weeklysales />
        <appointment />
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import statistics from "./BlockStatistics.vue";
import revenue from "./BlockRevenue.vue";
import dailyfeed from "./BlockDailyFeed.vue";
import calendar from "./BlockCalendar.vue";
import weeklysales from "./BlockWeeklySales.vue";
import sales from "./BlockSales.vue";
import appointment from "./BlockAppointment.vue";
@Options({
  components: {
    statistics,
    revenue,
    dailyfeed,
    calendar,
    weeklysales,
    sales,
    appointment,
  },
})
export default class extends Vue {}
</script>

<style>
</style>