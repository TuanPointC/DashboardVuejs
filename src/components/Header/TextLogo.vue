<template>
  <div class="logo">
    <span class="mobilde_text">
      <span class="text1">T</span>
      <span class="text2">.C</span>
    </span>
    <span class="desktop_text">
      <span class="text1">TUAN</span>
      <span class="text2">.C</span>
    </span>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class  extends Vue {}
</script>

<style scoped lang='scss'>
.logo {
  font-size: 20px;
  margin: 0 20px;
  font-weight: bold;
  .mobilde_text {
    display: none;
  }
  .desktop_text {
    display: block;
  }
  .text1 {
    color: blue;
  }
  .text2 {
    color: orangered;
  }
}
@media only screen and (max-width: 680px) {
  .logo {
    margin: 0 5px;
    .mobilde_text {
      display: block;
    }
    .desktop_text {
      display: none;
    }
  }
}
</style>