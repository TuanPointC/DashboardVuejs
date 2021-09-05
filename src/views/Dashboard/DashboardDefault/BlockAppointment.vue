<template>
  <el-card class="box-card">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
@Options({})
export default class extends Vue {
  activities = [
    {
      content: "Custom icon",
      timestamp: "2018-04-12 20:46",
      size: "large",
      type: "primary",
      icon: "el-icon-more",
    },
    {
      content: "Custom color",
      timestamp: "2018-04-03 20:46",
      color: "#0bbd87",
    },
    {
      content: "Custom size",
      timestamp: "2018-04-03 20:46",
      size: "large",
    },
    {
      content: "Default node",
      timestamp: "2018-04-03 20:46",
    },
  ];
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
  .el-timeline {
    color: var(--color-white1);
  }
  --el-text-color-primary: var(--color-white1);
}
</style>