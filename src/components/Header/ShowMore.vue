<template>
  <div
    :class="{ box_show_more: true, box_show_more_show: show }"
    @click="showOverlay"
    v-click-away="showOverlayWhenClickOutside"
  >
    <el-tooltip
      class="item"
      effect="dark"
      :content="$t('seemore')"
      placement="bottom-end"
    >
      <el-button>{{ $t("seemore") }} <span class="mdi mdi-chevron-down"/> </el-button>
    </el-tooltip>
    <ul class="overlay">
      <li>
        <span class="mdi mdi-account-circle"></span>
        <span class="content">{{$t('profile')}}</span>
      </li>
      <li>
        <span class="mdi mdi-google-analytics"></span>
        <span class="content">{{$t('anatylic')}}</span>
      </li>
      <li>
        <span class="mdi mdi-ship-wheel"></span>
        <span class="content">{{$t('settings')}}</span>
      </li>
      <li>
        <span class="mdi mdi-help-circle"></span>
        <span class="content">{{$t('help')}}</span>
      </li>
      <li>
        <span class="mdi mdi-power"></span>
        <span class="content">{{$t('signout')}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class extends Vue {
  private show = false;
  showOverlay() {
    this.show = !this.show;
  }
  showOverlayWhenClickOutside() {
    if (this.show) {
      this.show = false;
    }
  }
}
</script>

<style scoped lang='scss'>
.box_show_more {
  position: relative;
  margin-left: 15px;
  .el-button{
      background: none;
      border: none;
      color: var(--color-white1);
      &:hover{
          background: var(--color-white2);
      }
  }
  .overlay {
    position: absolute;
    top: 65px;
    left: -20px;
    width: 150px;
    background: var(--background-black1);
    list-style: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    transition: 0.3s;
    max-height: 0px;
    overflow: hidden;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--color-white1);
      transition: 0.3s;
      padding: 0 20px;
      cursor: pointer;
      font-size: 15px;
      line-height: 35px;
      &:hover {
        background: var( --color-hover-white);
      }
    }
  }
}
.box_show_more_show {
  .overlay {
    max-height: 1000px;
  }
}

@media only screen and (max-width: 720px) {
  .box_show_more{
      display: none;
  }
}
</style>