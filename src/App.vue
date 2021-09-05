<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Vue, Options } from "vue-class-component";
@Options({})
export default class extends Vue {}
</script>

<style>
:root {

  --background-black1:black;
  --background-black2:#272727;
  --background-black3:#DCDCDC;
  --color-white1:white;
  --color-white2:#757575;
  --color-hover-white:#1976D2;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-collapse-item__header {
  border: none !important;
  padding-left: 20px;
}
a {
  text-decoration: none;
  color: white;
}
</style>
