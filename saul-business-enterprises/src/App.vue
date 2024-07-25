<template>
<!-- <navComp></navComp> -->
<HomeView></HomeView>
<About></About>
<services></services>
<Portfolio></Portfolio>
<Pricing></Pricing>
<testimonials></testimonials>
<Faq></Faq>
<Team></Team>
<contact></contact>
<footerComp></footerComp>
<!-- <router-view></router-view> -->
</template>

<style>
@import '../src/assets/css/main.css';
</style>
<script>
// import navComp from './components/navComp.vue'
import footerComp from './components/footerComp'
import HomeView from './views/HomeView'
import About from './views/AboutView'
import Team from './views/TeamView'
import services from './views/servicesView'
import contact from './views/ContactView'
import testimonials from './views/testimonialsView.vue'
import Pricing from './views/PricingView'
import Faq from './views/FaqView'
import Portfolio from './views/PortfolioView'


export default {
  components:{
    // navComp,
    HomeView,
    About,
    Team,
    services,
    contact,
    testimonials,
    Pricing,
    Faq,
    Portfolio,
    
    footerComp
    
  }
}
</script>
