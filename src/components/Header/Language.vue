<template>
  <div
    :class="{ box_lang: true, box_lang_show: show }"
    @click="showOverlay"
    v-click-away="showOverlayWhenClickOutside"
  >
    <el-tooltip
      class="item"
      effect="dark"
      :content="$t('language')"
      placement="bottom-end"
    >
      <div class="language">
        <div class="flag">
          <img :src="require(`@/assets/${flat[lang]}.png`)" alt="" />
        </div>
      </div>
    </el-tooltip>
    <ul class="overlay">
      <li @click="ChangeLang('en')">
        <div class="img">
          <img :src="require('@/assets/us.png')" alt="" />
        </div>
        <span>English</span>
      </li>
      <li @click="ChangeLang('vi')">
        <div class="img">
          <img :src="require('@/assets/vn.png')" alt="" />
        </div>
        <span>Tiếng Việt</span>
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
  private lang = "en";
  private show = false;
  private flat = {
    en: "us",
    vi: "vn",
  };
  showOverlay() {
    this.show = !this.show;
  }
  showOverlayWhenClickOutside() {
    if (this.show) {
      this.show = false;
    }
  }

  ChangeLang(lang: string) {
    this.lang = lang;
    this.$i18n.locale = lang;
  }
}
</script>

<style scoped lang='scss'>
.box_lang {
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 15px;
  transition: 0.3s;
  padding: 10px;
  border-radius: 50%;
  &:hover {
    background: gray;
  }
  .language {
    cursor: pointer;
    .flag {
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
  }
  .overlay {
    position: absolute;
    top: 60px;
    left: -20px;
    width: 150px;
    background: black;
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
      color: white;
      transition: 0.3s;
      padding: 0 20px;
      cursor: pointer;
      font-size: 15px;
      &:hover {
        background: gray;
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
    }
  }
}

.box_lang_show {
  .overlay {
    max-height: 1000px;
  }
}
@media only screen and (max-width: 756px) {
  .box_lang {
    .overlay {
      left: -100px;
      li {
        padding: 0px 20px;
      }
    }
  }
}
@media only screen and (max-width: 490px) {
  .box_lang {
    margin-left: 0px;
    .overlay {
      left: -100px;
      li {
        padding: 0px 20px;
      }
    }
  }
}
</style>