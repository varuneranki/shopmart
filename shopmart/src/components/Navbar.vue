<template>
  <nav>
  <v-navigation-drawer v-model="drawer" absolute temporary></v-navigation-drawer>

    <v-toolbar>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase red--text">
          <router-link to="/" tag="span" style="cursor:pointer">ShopMart</router-link>
          </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    }
},
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
