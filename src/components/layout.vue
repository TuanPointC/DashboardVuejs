<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header>
      <header-layout v-on:changeNavBar="showNavBar = !showNavBar" />
    </el-header>

    <el-container class="mid">
      <el-aside :width="showNavBar ? '250px' : '0px'">
        <aside-main />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <footer-component />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import HeaderLayout from "./Header/HeaderComponent.vue";
import { Options, Vue } from "vue-class-component";
import AsideMain from "./Aside/AsideMain.vue";
import FooterComponent from "./FooterComponent.vue";
@Options({
  components: {
    HeaderLayout,
    AsideMain,
    FooterComponent,
  },
})
export default class Home extends Vue {
  private showNavBar = false;
}
</script>

<style lang='scss' scoped>
.el-header,
.el-footer {
  background-color: var(--background-black2);
  text-align: center;
  line-height: 60px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.el-header {
  position: sticky;
  z-index: 98;
}
.el-aside {
  transition: 0.5s;
  z-index: 99;
}

.el-main {
  background-color: var(--background-black1);
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
.mid {
  height: 100vh;
  overflow: auto;
}
</style>