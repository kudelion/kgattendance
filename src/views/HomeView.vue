<template>
    <NavbarPage/>
    <LandingPage/>
    <LoginPage/>
</template>

<script>
// @ is an alias to /src
import NavbarPage from '@/components/NavbarPage.vue'
import LandingPage from '@/components/LandingPage.vue'
import LoginPage from '@/components/LoginPage.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarPage,
    LandingPage,
    LoginPage
  }
}
</script>
