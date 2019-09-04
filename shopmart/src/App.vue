<template>
  <v-app>
    <div>
      <v-app-bar
        absolute
        dark
        extended
        clipped-left
        src="https://i.postimg.cc/gkZF8tdt/toolbarbackimg.jpg"
        class="deep-orange darken-4"
      >
      <template v-slot:img="{ props }">
                <v-img
                  v-bind="props"
                  gradient="to top right, rgba(19,84,122,.8), rgba(18,208,199,.9)"
                ></v-img>
      </template>
        <v-container>
          <v-row>
            <v-col>
              <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
              
              <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                  <span style="color:#FFF">ShopMart</span>
                </router-link>
              </v-toolbar-title>
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
        </v-container>

        <v-text-field light hide-details outlined solo single-line></v-text-field>

        <div class="d-none d-sm-flex">
          <v-btn
            style="color:#FFF"
            text
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
          >
            <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </div>
      </v-app-bar>
    </div>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { title: "LogIn", icon: "lock_open", link: "/login" },
        { title: "SignUp", icon: "face", link: "/signup" }
      ];

      return menuItems;
    }
  }
};
</script>
