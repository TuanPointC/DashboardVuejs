<template>
  <div class="header_component">
    <div class="group1">
      <button-show-nav-bar v-on:changeNavBar="$emit('changeNavBar')" />
      <text-logo class="text_logo" />
    </div>
    <search-area class="search_area" />
    <div class="group2">
      <message />
      <notification />
      <language />
      <show-more />
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import ButtonShowNavBar from "./ButtonShowNavBar.vue";
import SearchArea from "./SearchArea.vue";
import TextLogo from "./TextLogo.vue";
import Message from "./Message.vue";
import Language from "./Language.vue";
import Notification from "./Notification.vue";
import ShowMore from "./ShowMore.vue";
@Options({
  components: {
    ButtonShowNavBar,
    TextLogo,
    SearchArea,
    Message,
    Language,
    Notification,
    ShowMore,
  },
})
export default class extends Vue {}
</script>

<style scoped lang='scss'>
.header_component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .group2,
  .group1 {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>