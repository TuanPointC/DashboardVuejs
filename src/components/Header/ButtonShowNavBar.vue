<template>
  <div
    :class="{ button_show_menu: true, button_hidden_menu: show }"
    @click="ChangeShow(),$emit('changeNavBar')" 
  >
    <div class="box_button">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options,Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  private show = false;

  ChangeShow() {
    this.show = !this.show;
  }
}
</script>

<style scoped lang='scss'>
.button_show_menu {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1.6px solid var(--color-white1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    background: var(--color-hover-white);
    cursor: pointer;
  }
  .line {
    width: 20px;
    height: 1.6px;
    background: var(--color-white1);
    margin: 3px 0;
    transition: 0.3s;
  }
}

.button_hidden_menu {
  .line1 {
    transform: rotate(45deg) translate(3px, 4px);
  }
  .line2 {
    opacity: 0;
    overflow: hidden;
  }
  .line3 {
    transform: rotate(-45deg) translate(3px, -3px);
  }
}
@media only screen and (max-width: 720px) {
  .button_show_menu {
  width: 25px;
  height: 25px;
  .line {
    width: 15px;
    height: 1.6px;
    background: var(--color-white1);
    margin: 3px 0;
    transition: 0.3s;
  }
}
}
</style>