<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang='ts'>
import {Vue, Options} from 'vue-class-component'
@Options({})
export default class extends Vue {
};
</script>

<style>
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
</style>
