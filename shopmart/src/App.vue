<template>
  <v-app>

    <Navbar />

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    drawer: false
  }),
  computed: {
    menuItems () {
      let menuItems = [
        { title: 'LogIn', icon: 'lock_open', link: '/login' },
        { title: 'SignUp', icon: 'face', link: '/signup' }
      ]

      return menuItems
    }
  }
}
</script>
