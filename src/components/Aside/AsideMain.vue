<template>
  <div class="navbar">
    <el-collapse>
      <el-collapse-item name="1">
        <template #title>
          <span class="mdi mdi-view-dashboard"></span>
          {{ $t("dashboard") }}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <router-link to="/DashboardDefault">
              <li
                :class="{ hover: 'DashboardDefault' == $route.path.slice(1) }"
              >
                {{ $t("default") }}
              </li>
            </router-link>
            <router-link to="/DashboardAnatylic">
              <li
                :class="{ hover: 'DashboardAnatylic' == $route.path.slice(1) }"
              >
                {{ $t("anatylic") }}
              </li>
            </router-link>
            <router-link to="/DashboardEcommerce">
              <li
                :class="{ hover: 'DashboardEcommerce' == $route.path.slice(1) }"
              >
                {{ $t("e-commerce") }}
              </li>
            </router-link>
            <router-link to="/DashboardSocial">
              <li :class="{ hover: 'DashboardSocial' == $route.path.slice(1) }">
                {{ $t("social") }}
              </li>
            </router-link>

            <router-link to="/DashboardCrypto">
              <li :class="{ hover: 'DashboardCrypto' == $route.path.slice(1) }">
                {{ $t("crypto") }}
              </li>
            </router-link>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title>
          <span class="mdi mdi-book-open-outline"></span>
          {{ $t("page") }}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <router-link to="/PageProfiles">
              <li :class="{ hover: 'PageProfiles' == $route.path.slice(1) }">
                {{ $t("profile") }}
              </li>
            </router-link>
            <router-link to="/PageSettings">
              <li :class="{ hover: 'PageSettings' == $route.path.slice(1) }">
                {{ $t("settings") }}
              </li>
            </router-link>
            <router-link to="/PageClients">
              <li :class="{ hover: 'PageClients' == $route.path.slice(1) }">
                {{ $t("client") }}
              </li>
            </router-link>
            <router-link to="/PageInvoice">
              <li :class="{ hover: 'PageInvoice' == $route.path.slice(1) }">
                {{ $t("invoice") }}
              </li>
            </router-link>

            <li>{{ $t("project") }}</li>

            <router-link to="/PagePricing">
              <li :class="{ hover: 'PagePricing' == $route.path.slice(1) }">
                {{ $t("pricing") }}
              </li>
            </router-link>
            <router-link to="/PageTask">
              <li :class="{ hover: 'PageTask' == $route.path.slice(1) }">
                {{ $t("task") }}
              </li>
            </router-link>
            <router-link to="/PageChat">
              <li :class="{ hover: 'PageChat' == $route.path.slice(1) }">
                {{ $t("chat") }}
              </li>
            </router-link>
            <router-link to="/PageBlankPage">
              <li :class="{ hover: 'PageBlankPage' == $route.path.slice(1) }">
                {{ $t("blackPage") }}
              </li>
            </router-link>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title>
          <span class="mdi mdi-account-group"></span>
          {{ $t("authentication") }}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <router-link to="/AuthenticationLogin">
              <li
                :class="{
                  hover: 'AuthenticationLogin' == $route.path.slice(1),
                }"
              >
                {{ $t("login") }}
              </li>
            </router-link>
            <router-link to="/AuthenticationSignUp">
              <li
                :class="{
                  hover: 'AuthenticationSignUp' == $route.path.slice(1),
                }"
              >
                {{ $t("signUp") }}
              </li>
            </router-link>
            <router-link to="/AuthenticationResetPassword">
              <li
                :class="{
                  hover: 'AuthenticationResetPassword' == $route.path.slice(1),
                }"
              >
                {{ $t("resetPassword") }}
              </li>
            </router-link>
            <router-link to="/Authentication404Page">
              <li
                :class="{
                  hover: 'Authentication404Page' == $route.path.slice(1),
                }"
              >
                {{ $t("404Page") }}
              </li>
            </router-link>
            <router-link to="/Authentication500Page">
              <li
                :class="{
                  hover: 'Authentication500Page' == $route.path.slice(1),
                }"
              >
                {{ $t("500Page") }}
              </li>
            </router-link>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template #title>
          <span class="mdi mdi-book-open"></span>
          {{ $t("document") }}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <router-link to="/DocumentIntroduction">
              <li
                :class="{
                  hover: 'DocumentIntroduction' == $route.path.slice(1),
                }"
              >
                {{ $t("introduction") }}
              </li>
            </router-link>
            <router-link to="/DocumentGettingStarted">
              <li
                :class="{
                  hover: 'DocumentGettingStarted' == $route.path.slice(1),
                }"
              >
                {{ $t("getStarted") }}
              </li>
            </router-link>
            <router-link to="/DocumentPlugins">
              <li :class="{ hover: 'DocumentPlugins' == $route.path.slice(1) }">
                Plugins
              </li>
            </router-link>
            <router-link to="/DocumentChangelog">
              <li
                :class="{ hover: 'DocumentChangelog' == $route.path.slice(1) }"
              >
                Chanelog
              </li>
            </router-link>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template #title>
          <span class="mdi mdi-google-circles-communities"></span>
          {{ $t("uielements") }}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <router-link to="/ElementAlerts">
              <li :class="{ hover: 'ElementAlerts' == $route.path.slice(1) }">
                {{ $t("alerts") }}
              </li>
            </router-link>
            <router-link to="/ElementButtons">
              <li :class="{ hover: 'ElementButtons' == $route.path.slice(1) }">
                {{ $t("buttons") }}
              </li>
            </router-link>
            <router-link to="/ElementCards">
              <li :class="{ hover: 'ElementCards' == $route.path.slice(1) }">
                {{ $t("cards") }}
              </li>
            </router-link>
            <router-link to="/ElementCarousel">
              <li :class="{ hover: 'ElementCarousel' == $route.path.slice(1) }">
                Carousel
              </li>
            </router-link>
            <router-link to="/ElementEmbedVideo">
              <li
                :class="{ hover: 'ElementEmbedVideo' == $route.path.slice(1) }"
              >
                {{ $t("embedVideo") }}
              </li>
            </router-link>
            <router-link to="/ElementGeneral">
              <li :class="{ hover: 'ElementGeneral' == $route.path.slice(1) }">
                {{ $t("general") }}
              </li>
            </router-link>
            <router-link to="/ElementGrids">
              <li :class="{ hover: 'ElementGrids' == $route.path.slice(1) }">
                {{ $t("grid") }}
              </li>
            </router-link>
            <router-link to="/ElementModals">
              <li :class="{ hover: 'ElementModals' == $route.path.slice(1) }">
                Modals
              </li>
            </router-link>
            <router-link to="/ElementTabs">
              <li :class="{ hover: 'ElementTabs' == $route.path.slice(1) }">
                Tabs
              </li>
            </router-link>
            <router-link to="/ElementTypography">
              <li
                :class="{ hover: 'ElementTypography' == $route.path.slice(1) }"
              >
                Typography
              </li>
            </router-link>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template #title>
          <span class="mdi mdi-cards-heart"></span>
          Icons
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <router-link to="/IconsFontAwesome">
              <li
                :class="{ hover: 'IconsFontAwesome' == $route.path.slice(1) }"
              >
                Material Design Icon
              </li>
            </router-link>
            <router-link to="/IconsMaterialDesignIcon">
              <li
                :class="{
                  hover: 'IconsMaterialDesignIcon' == $route.path.slice(1),
                }"
              >
                Font Awesome 5
              </li>
            </router-link>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template #title>
          <span class="mdi mdi-check-underline-circle"></span>
          Form
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>Layouts</li>
            <li>{{ $t("basicInput") }}</li>
            <li>{{ $t("inputGroups") }}</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template #title>
          <span class="mdi mdi-file-table"></span>
          Tables
        </template>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template #title>
          <span class="mdi mdi-checkbox-multiple-marked"></span>
          Form Plugind
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>Advanced Inputs</li>
            <li>{{ $t("editors") }}</li>
            <li>{{ $t("validation") }}</li>
            <li>Wizard</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="10">
        <template #title>
          <span class="mdi mdi-checkbox-multiple-marked"></span>
          Data Tables
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>Reponsive Tables</li>
            <li>{{ $t("tableWithButtons") }}</li>
            <li>{{ $t("columnSearch") }}</li>
            <li>Multi Select</li>
            <li>Ajax Sourced Data</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="11">
        <template #title>
          <span class="mdi mdi-chart-areaspline"></span>
          Chart
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>Chart.js</li>
            <li>ApexCharts</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="12">
        <template #title>
          <span class="mdi mdi-bell-ring"></span>
          {{ $t("notification") }}
        </template>
      </el-collapse-item>
      <el-collapse-item name="13">
        <template #title>
          <span class="mdi mdi-google-maps"></span>
          {{ $t("maps") }}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>Google Maps</li>
            <li>Vector Maps</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="14">
        <template #title>
          <span class="mdi mdi-calendar"></span>
          {{ $t("calendar") }}
        </template>
      </el-collapse-item>
      <el-collapse-item name="15">
        <template #title>
          <span class="mdi mdi-google-analytics"></span>
          Multi Level
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>One level</li>
            <li>Two level</li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang='ts'>
import { Vue, Options } from "vue-class-component";
@Options({})
export default class extends Vue {}
</script>

<style scoped lang='scss'>
.navbar {
  background: var(--background-black2);
  .el-collapse {
    height: 92vh;
    background: var(--background-black2);
    --el-collapse-content-background-color: var(--background-black2);
    --el-collapse-header-background-color: var(--background-black2);
    --el-collapse-header-font-color: var(--color-white1);
    --el-collapse-content-font-color: var(--color-white1);
    span {
      font-size: 20px;
      margin-right: 20px;
    }
    .el-collapse-item {
      .list_sub_menu {
        text-align: left;
        list-style: none;
        li {
          padding: 10px 10px 10px 30px;
          cursor: pointer;
          transition: 0.3;
          color: var(--color-white1);
          &:hover {
            background: var(--color-hover-white);
          }
        }
      }
      &:hover {
        --el-collapse-header-background-color: var(--color-hover-white);
      }
      .el-collapse-item__header {
        transition: 0.3s !important;
      }
    }
  }
}
.navbar {
  li.hover {
    background: #19d257 !important;
  }
}
</style>