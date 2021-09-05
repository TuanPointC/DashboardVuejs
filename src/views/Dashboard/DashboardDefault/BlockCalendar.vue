<template>
  <el-card class="box-card">
    <el-calendar>
      <template #dateCell="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template>
    </el-calendar>
  </el-card>
</template>

<style scoped lang='scss'>
.is-selected {
  color: #1989fa;
}
.box-card {
  height: fit-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: none;
  line-height: 20px;
  background: var(--background-black2);
  margin: 10px 0;
  .el-calendar {
    background: var(--background-black2);
    color: var(--color-white2);
  }
}
</style>