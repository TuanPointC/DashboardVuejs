<template>
  <el-container>
    <el-header>
      <header-layout v-on:changeNavBar="(showNavBar = !showNavBar)" />
    </el-header>
    <el-container>
      <el-aside :width="showNavBar?'250px':'0px'">
        <aside-main />
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import HeaderLayout from "./Header/HeaderComponent.vue";
import { Options, Vue } from "vue-class-component";
import AsideMain from "./Aside/AsideMain.vue";
@Options({
  components: {
    HeaderLayout,
    AsideMain,
  },
})
export default class Home extends Vue {
  private showNavBar = false;
}
</script>

<style lang='scss' scoped>
.el-header,
.el-footer {
  background-color: #121212;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  transition: 0.5s;

}


.el-main {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>