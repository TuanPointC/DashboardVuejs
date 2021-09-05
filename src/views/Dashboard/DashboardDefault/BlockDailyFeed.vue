<template>
  <el-card class="notification">
    <ul class="overlay">
      <div class="top_title">Daily Feed</div>
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
  </el-card>
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
}
</script>

<style scoped lang='scss'>
.notification {
  line-height: 30px;
  background: var(--background-black1);
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: none;
  line-height: 20px;
  background: var(--background-black2);
  margin-top: 10px;
  position: relative;
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
      background: var(--color-hover-white);
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
    margin-top: 10px;
    width: 100%;
    .el-button {
      width: 100%;
    }
  }
}
</style>