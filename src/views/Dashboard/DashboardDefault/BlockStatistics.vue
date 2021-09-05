<template>
  <div class="statistics">
    <el-row :gutter="20">
      <el-col :md="{span:6}" :sm="{span:12}"
        ><div class="grid-content">
          <el-card class="box-card">
            <div class="number">25</div>
            <div class="title">Sales Today</div>
            <div class="count">
              <span class="mount">-25%</span>
              <span class="infor">Since last week</span>
            </div>
            <span class="mdi mdi-cart" style="color:green"></span>
          </el-card></div
      ></el-col>
      <el-col :md="{span:6}" :sm="{span:12}"
        ><div class="grid-content">
          <el-card class="box-card">
            <div class="number">17.212</div>
            <div class="title">Visitors Today</div>
            <div class="count">
              <span class="mount" style="background:#232F23;color:green">+35%</span>
              <span class="infor">Since last week</span>
            </div>
            <span class="mdi mdi-heart-pulse" style="color:red"></span>
          </el-card></div
      ></el-col>
      <el-col :md="{span:6}" :sm="{span:12}"
        ><div class="grid-content">
          <el-card class="box-card">
            <div class="number">$ 24.300</div>
            <div class="title">Total Earnings</div>
            <div class="count">
              <span class="mount" style="background:#232F23;color:green">+15%</span>
              <span class="infor">Since last week</span>
            </div>
            <span class="mdi mdi-gift" style="color:blue"></span>
          </el-card></div
      ></el-col>
      <el-col :md="{span:6}" :sm="{span:12}"
        ><div class="grid-content">
          <el-card class="box-card">
            <div class="number">25</div>
            <div class="title">Pending Orders</div>
            <div class="count">
              <span class="mount" style="background:#232F23;color:green">+25%</span>
              <span class="infor">Since last week</span>
            </div>
            <span class="mdi mdi-shopping" style="color:orange"></span>
          </el-card></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
export default class extends Vue {}
</script>

<style lang='scss' scoped>
.grid-content {
  .box-card {
    height: fit-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: none;
    line-height: 20px;
    background: var(--background-black2);
    margin: 10px 0;
    position: relative;
    .number {
      color: var(--color-white1);
      font-size: 35px;
      text-align: left;
      font-weight: bold;
    }
    .title {
      color: var(--color-white2);
      font-size: 20px;
      text-align: left;
      margin: 20px 0;
    }
    .count {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .mount {
        background: rgb(192, 133, 133);
        color: red;
        padding: 10px 20px;
        margin-right: 20px;
      }
      .infor {
        color: var(--color-white2);
        font-size: 20px;
      }
    }
    span.mdi{
      position: absolute;
      font-size: 120px;
      top: 40px;
      right: 0;
      transform: rotate(30deg);
    }
  }
}
</style>