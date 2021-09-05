<template>
  <div class="footer">
    <el-button size="mini" round plain>Home</el-button>
    <el-button size="mini" round plain>Settings</el-button>
    <el-button size="mini" round plain>Profile</el-button>
    <el-button size="mini" round plain>Pricing</el-button>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
Options({});
export default class extends Vue {}
</script>

<style scoped lang='scss'>
.footer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-button {
    background: none;
  }
}
@media only screen and (max-width: 756px) {
  .footer {
    .el-button {
      background: none;
      font-size: 10px;
      color: var(--color-white1)!important;
    }
  }
}
</style>