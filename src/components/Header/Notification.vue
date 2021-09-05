<template>
  <div
    :class="{ box_notification: true, box_notification_show: show }"
    @click="showNotification"
    v-click-away="showNotificationWhenClickOutside"
  >
    <div class="notification">
      <el-tooltip
        class="item"
        effect="dark"
        :content="$t('notification')"
        placement="bottom-end"
      >
        <el-button circle class="icon_button">
          <div class="count_notification">5</div>
          <span class="mdi mdi-bell-outline"></span>
        </el-button>
      </el-tooltip>

      <ul class="overlay">
        <div class="top_title">
          {{ $t("notification") }}
        </div>
        <li v-for="img in face" :key="img.url">
          <div class="img">
            <img :src="img.url" alt="" />
          </div>
          <div class="content">
            <div class="title">{{ img.title }}</div>
            <div class="concept">{{ img.content }}</div>
          </div>
        </li>
        <div class="see_more">
          <el-button type="primary">{{ $t("seemore") }}</el-button>
        </div>
      </ul>
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
  private face = [
    {
      url: require("@/assets/people/face1.png"),
      title: "Brunch this weekend?",
      content:
        " — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      url: require("@/assets/people/face2.jpg"),
      title: "Brunch this weekend?",
      content:
        " — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      url: require("@/assets/people/face3.jpg"),
      title: "Brunch this weekend?",
      content:
        " — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      url: require("@/assets/people/face3.png"),
      title: "Brunch this weekend?",
      content:
        " — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      url: require("@/assets/people/face4.jpg"),
      title: "Brunch this weekend?",
      content:
        " — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
  ];
  private show = false;

  showNotification() {
    this.show = !this.show;
  }
  showNotificationWhenClickOutside() {
    if (this.show) {
      this.show = false;
    }
  }
}
</script>

<style scoped lang='scss'>

.box_notification {
  display: flex;
  align-items: center;
  .notification {
    position: relative;
    z-index: 99;
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
    .el-button.icon_button {
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
    .overlay {
      position: absolute;
      top: 65px;
      right: -40px;
      width: 450px;
      background: var(--background-black1);
      list-style: none;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 5px;
      transition: 0.5s;
      max-height: 0px;
      overflow: hidden;
      .top_title {
        color: var(--color-white1);
      }
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--color-white1);
        transition: 0.3s;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 15px;
        border-top: 1px solid var(--color-white2);
        &:hover {
          background: var( --color-hover-white);
        }
        .img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            margin-top: 5px;
            transform: scale(2);
          }
        }
        .content {
          line-height: 20px;
          text-align: left;
          margin-left: 15px;
          width: 90%;
          color: var(--color-white1);

          .title {
            font-weight: bold;
            font-size: 18px;
          }
          .concept {
            word-break: break-all;
          }
        }
      }
      .see_more {
        width: 100%;
        .el-button {
          width: 100%;
        }
      }
    }
  }
}
.box_notification_show {
  .notification {
    .overlay {
      max-height: 1000px;
    }
  }
}
@media only screen and (max-width: 490px) {
  .box_notification {
    .notification {
      .count_notification {
        width: 15px;
        height: 15px;
        top: 10px;
      }
      .el-button.icon_button {
        padding: 2px;
        span {
          font-size: 18px;
          display: inline-block;
          margin-top: 15px;
        }
      }
      .overlay {
        right: -50px;
        max-width: 350px;
        li {
          .content {
            .title {
              font-size: 13px;
            }
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>