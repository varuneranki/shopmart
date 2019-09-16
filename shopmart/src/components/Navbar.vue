<template>
  <nav>
  <v-navigation-drawer v-model="drawer" absolute temporary class="warning">
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.title" router :to="item.link">
           <v-list-item-icon>
             <v-icon>
               {{item.icon}}
             </v-icon>
           </v-list-item-icon>
           <v-list-item-content>
             {{item.title}}
           </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

    <v-toolbar>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase red--text">
          <router-link to="/" tag="span" style="cursor:pointer">ShopMart</router-link>
          </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
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
  data () {
    return {
      drawer: false
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
