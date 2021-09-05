import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout.vue'

///import Dashboard
import DashboardDefault from '@/views/Dashboard/DashboardDefault/DefaultContainer.vue'
import DashboardCrypto from '@/views/Dashboard/Crypto/CryptoContainer.vue'
import DashboardAnatylic from '@/views/Dashboard/DashboardAnatylics/AnatylicContainer.vue'
import DashboardEcommerce from '@/views/Dashboard/DashboardEcommerce/EcommerceContainer.vue'
import DashboardSocial from '@/views/Dashboard/DashboardSocial/SocialContainer.vue'

/// import pages
import PageBlankPage from '@/views/Pages/BlankPage.vue'
import PageChat from '@/views/Pages/Chat.vue'
import PageClients from '@/views/Pages/Clients.vue'
import PageInvoice from '@/views/Pages/Invoice.vue'
import PagePricing from '@/views/Pages/Pricing.vue'
import PageProfiles from '@/views/Pages/Profiles.vue'
import PageSettings from '@/views/Pages/Settings.vue'
import PageTask from '@/views/Pages/Tasks.vue'

// import Ui element
import ElementAlerts from '@/views/UiElement/Alerts.vue' 
import ElementButtons from '@/views/UiElement/Buttons.vue' 
import ElementCards from '@/views/UiElement/Cards.vue' 
import ElementCarousel from '@/views/UiElement/Carousel.vue' 
import ElementEmbedVideo from '@/views/UiElement/EmbedVideo.vue' 
import ElementGeneral from '@/views/UiElement/General.vue' 
import ElementGrids from '@/views/UiElement/Grids.vue' 
import ElementModals from '@/views/UiElement/Modals.vue' 
import ElementTabs from '@/views/UiElement/Tabs.vue' 
import ElementTypography from '@/views/UiElement/Typography.vue' 

//import Forms
import FormsBasicInput from '@/views/Forms/BasicInput.vue'
import FormsInputGroups from '@/views/Forms/InputGroups.vue'
import FromsLayout from '@/views/Forms/Layout.vue'

//import Icons
import IconsFontAwesome from '@/views/Icons/FontAwesome.vue'
import IconsMaterialDesignIcon from '@/views/Icons/MaterialDesignIcon.vue'

//import Authentication
import Authentication404Page from '@/views/Authentication/404Page.vue'
import Authentication500Page from '@/views/Authentication/500Page.vue'
import AuthenticationLogin from '@/views/Authentication/Login.vue'
import AuthenticationResetPassword from '@/views/Authentication/ResetPassword.vue'
import AuthenticationSignUp from '@/views/Authentication/SignUp.vue'

// import Document
import DocumentChangelog from '@/views/Documentation/Changelog.vue'
import DocumentGettingStarted from '@/views/Documentation/GettingStarted.vue'
import DocumentIntroduction from '@/views/Documentation/Introduction.vue'
import DocumentPlugins from '@/views/Documentation/Plugins.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path:'DashboardDefault',
        component:DashboardDefault
      },
      {
        path:'DashboardCrypto',
        component:DashboardCrypto
      },
      {
        path:'DashboardAnatylic',
        component:DashboardAnatylic
      },
      {
        path:'DashboardEcommerce',
        component:DashboardEcommerce
      },
      {
        path:'DashboardSocial',
        component:DashboardSocial
      },
      /////Page
      {
        path:'PageBlankPage',
        component:PageBlankPage
      },
      {
        path:'PageChat',
        component:PageChat
      },
      {
        path:'PageClients',
        component:PageClients
      },
      {
        path:'PageInvoice',
        component:PageInvoice
      },
      {
        path:'PagePricing',
        component:PagePricing
      },
      {
        path:'PageProfiles',
        component:PageProfiles
      },
      {
        path:'PageSettings',
        component:PageSettings
      },
      {
        path:'PageTask',
        component:PageTask
      },

      //element ui
      {
        path:'ElementAlerts',
        component:ElementAlerts
      },
      {
        path:'ElementButtons',
        component:ElementButtons
      },
      {
        path:'ElementCards',
        component:ElementCards
      },
      {
        path:'ElementCarousel',
        component:ElementCarousel
      },
      {
        path:'ElementEmbedVideo',
        component:ElementEmbedVideo
      },
      {
        path:'ElementGeneral',
        component:ElementGeneral
      },
      {
        path:'ElementGrids',
        component:ElementGrids
      },
      {
        path:'ElementModals',
        component:ElementModals
      },
      {
        path:'ElementTabs',
        component:ElementTabs
      },
      {
        path:'ElementTypography',
        component:ElementTypography
      },
      {
        path:'FormsBasicInput',
        component:FormsBasicInput
      },
      {
        path:'FormsInputGroups',
        component:FormsInputGroups
      },
      {
        path:'FromsLayout',
        component:FromsLayout
      },
      {
        path:'IconsFontAwesome',
        component:IconsFontAwesome
      },
      {
        path:'IconsMaterialDesignIcon',
        component:IconsMaterialDesignIcon
      },
      //authentication
      {
        path:'Authentication404Page',
        component:Authentication404Page
      },
      {
        path:'Authentication500Page',
        component:Authentication500Page
      },
      {
        path:'AuthenticationLogin',
        component:AuthenticationLogin
      },
      {
        path:'AuthenticationResetPassword',
        component:AuthenticationResetPassword
      },
      {
        path:'AuthenticationSignUp',
        component:AuthenticationSignUp
      },
      //document
      {
        path:'DocumentChangelog',
        component:DocumentChangelog
      },
      {
        path:'DocumentGettingStarted',
        component:DocumentGettingStarted
      },
      {
        path:'DocumentIntroduction',
        component:DocumentIntroduction
      },
      {
        path:'DocumentPlugins',
        component:DocumentPlugins
      },

    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
