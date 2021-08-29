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

    <div class="theme">
      <el-button circle>
        <span class="mdi mdi-hexagon-slice-3"></span>
      </el-button>
    </div>
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
}
</script>

<style scoped lang='scss'>
.box_message {
  display: flex;
  align-items: center;
  .message,
  .notification,
  .theme {
    position: relative;
    .count_message,
    .count_notification {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: green;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
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
        background: gray !important;
      }

      span {
        color: white;
        font-size: 25px;
      }
    }
  }
}
@media only screen and (max-width: 490px) {
  .box_message {
    .el-button {
      padding: 5px;
      span {
        font-size: 20px;
        display: inline-block;
        margin-top: 15px;
      }
    }
  }
}
</style>