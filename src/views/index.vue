<template>
    <body class="skin-green hold-transition sidebar-mini">
        <div class="wrapper">
            <main-header-navbar></main-header-navbar>
            <main-sidebar></main-sidebar>

            <router-view></router-view>

            <main-footer></main-footer>
        </div>
    </body>
</template>


<script>
import mainFooter from '@/components/main-footer.vue'
import mainHeaderNavbar from '@/components/main-header-navbar.vue'
import mainSidebar from '@/components/main-sidebar.vue'

export default {
  name: 'index',
  components: {
    mainFooter,
    mainHeaderNavbar,
    mainSidebar
  },

}
</script>

<style>
    
</style>