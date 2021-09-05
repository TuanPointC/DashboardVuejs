<template>
  <div class="box_message">
    <div class="message">
      <el-tooltip
        class="item"
        effect="dark"
        :content="$t('message')"
        placement="bottom-end"
      >
        <el-button circle>
          <div class="count_message">10</div>
          <span class="mdi mdi-message-text-outline"></span>
        </el-button>
      </el-tooltip>
    </div>

    <div class="theme" @click="changeColor2">
      <el-button circle>
        <span class="mdi mdi-hexagon-slice-3"></span>
      </el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
declare var require: any;
@Options({
  components: {},
})
export default class extends Vue {
  private contentInput = "";
  private color = "white";
  changeColor() {
    this.color = this.color == "white" ? "blue" : "white";
  }
  root = document.documentElement;
  count = 0;
  changeColor2() {
    this.count++;
    if (this.count % 2 == 0) {
      this.root.style.setProperty("--background-black1", "black");
      this.root.style.setProperty("--background-black2", "#272727");
      this.root.style.setProperty("--background-black3", "#DCDCDC");
      this.root.style.setProperty("--color-white1", "white");
      this.root.style.setProperty("--color-white2", "#757575");
      this.root.style.setProperty("--color-hover-white", "#1976D2");
    }
    else{
      this.root.style.setProperty("--background-black1", "white");
      this.root.style.setProperty("--background-black2", "#FFFFFF");
      this.root.style.setProperty("--background-black3", "#DCDCDC");
      this.root.style.setProperty("--color-white1", "black");
      this.root.style.setProperty("--color-white2", "#717171");
      this.root.style.setProperty("--color-hover-white", "#1976D2");
    }
  }
}
</script>

<style scoped lang='scss'>
.box_message {
  display: flex;
  align-items: center;
  .message,
  .theme {
    position: relative;
    z-index: 99;
    .count_message,
    .count_notification {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: green;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-white1);
      font-weight: bold;
      font-size: 10px;
      position: absolute;
      top: 5px;
      right: 5px;
    }
    .el-button {
      background: none !important;
      border: none;
      outline: none;
      transition: all 0.2s ease;

      &:hover {
        background: var(--color-hover-white) !important;
      }

      span {
        color: var(--color-white1);
        font-size: 25px;
      }
    }
  }
}
@media only screen and (max-width: 490px) {
  .box_message {
    .message,
    .theme {
      .count_message,
      .count_notification {
        width: 15px;
        height: 15px;
        font-size: 10px;
        top: 10px;
        right: 5px;
      }
      .el-button {
        padding: 5px;
        span {
          color: var(--color-white1);
          font-size: 15px;
        }
      }
    }
  }
}
</style>