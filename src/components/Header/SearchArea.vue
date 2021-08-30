<template>
  <div class="search" @mousedown="changeColor" v-click-away="changeColorWhenClickOutside">
    <span class="mdi mdi-magnify" :style="{ color: color }"></span>
    <input
      type="text"
      class="input"
      :placeholder="$t('search')"
      v-model="contentInput"
    />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class extends Vue {
  private contentInput = "";
  private color = "white";
  changeColor() {
    this.color = this.color == "white" ? "blue" : "white";
  }

  changeColorWhenClickOutside(){
    this.color= 'white'
  }

}
</script>

<style scoped lang='scss'>
.search {
  position: relative;

  span {
    position: absolute;
    top: 1px;
    left: 1px;
    color: white;
    font-size: 25px;
    z-index: 0;
  }
  .input {
    background: none;
    padding: 5px;
    border: none;
    color: white;
    padding-left: 30px;
    font-size: 18px;
    outline: none;
    width: 100%;
  }
}
@media only screen and (max-width: 720px) {
.search {
  span {
    font-size: 18px;
  }
  .input {
    padding: 2px;
    padding-left: 20px;
    font-size: 15px;
    outline: none;
    width: 100%;
  }
}
}
</style>