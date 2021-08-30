<template>
  <div class="navbar">
    <el-collapse>
      <el-collapse-item name="1">
        <template #title>
          <span class="mdi mdi-view-dashboard"></span>
          {{$t('dashboard')}}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li> {{$t('default')}}</li>
            <li> {{$t('anatylic')}}</li>
            <li>{{$t('e-commerce')}}</li>
            <li>{{$t('social')}}</li>
            <li>{{$t('crypto')}}</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title>
          <span class="mdi mdi-book-open-outline"></span>
          {{$t('page')}}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>{{$t('profile')}}</li>
            <li>{{$t('settings')}}</li>
            <li>{{$t('client')}}</li>
            <li>{{$t('project')}}</li>
            <li>{{$t('invoice')}}</li>
            <li>{{$t('pricing')}}</li>
            <li>{{$t('task')}}</li>
            <li>{{$t('chat')}}</li>
            <li>{{$t('blackPage')}}</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title>
          <span class="mdi mdi-account-group"></span>
          {{$t('authentication')}}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>{{$t('login')}}</li>
            <li>{{$t('signUp')}}</li>
            <li>{{$t('resetPassword')}}</li>
            <li>{{$t('404Page')}}</li>
            <li>{{$t('500Page')}}</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template #title>
          <span class="mdi mdi-book-open"></span>
          {{$t('document')}}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>{{$t('introduction')}}</li>
            <li>{{$t('getStarted')}}</li>
            <li>Plugins</li>
            <li>Chanelog</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template #title>
          <span class="mdi mdi-google-circles-communities"></span>
          {{$t('uielements')}}
        </template>
        <div class="sub_menu">
          <ul class="list_sub_menu">
            <li>{{$t('alerts')}}</li>
            <li>{{$t('buttons')}}</li>
            <li>{{$t('cards')}}</li>
            <li>Carousel</li>
            <li>{{$t('embedVideo')}}</li>
            <li>{{$t('general')}}</li>
            <li>{{$t('grid')}}</li>
            <li>Modals</li>
            <li>Tabs</li>
            <li>Typography</li>
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
            <li>Material Design Icon</li>
            <li>Font Awesome 5</li>
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
            <li>{{$t('basicInput')}}</li>
            <li>{{$t('inputGroups')}}</li>
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
            <li>{{$t('editors')}}</li>
            <li>{{$t('validation')}}</li>
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
            <li>{{$t('tableWithButtons')}}</li>
            <li>{{$t('columnSearch')}}</li>
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
          {{$t('notification')}}
        </template>
      </el-collapse-item>
      <el-collapse-item name="13">
        <template #title>
          <span class="mdi mdi-google-maps"></span>
          {{$t('maps')}}
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
          {{$t('calendar')}}
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
  background: black;
  .el-collapse {
    height: 90vh;
    overflow: auto;
    background: black;
    --el-collapse-content-background-color: black;
    --el-collapse-header-background-color: black;
    --el-collapse-header-font-color: white;
    --el-collapse-content-font-color: white;
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
          &:hover {
            background: gray;
          }
        }
      }
      &:hover {
        --el-collapse-header-background-color: gray;
      }
      .el-collapse-item__header {
        transition: 0.3s !important;
      }
    }
  }
}
</style>