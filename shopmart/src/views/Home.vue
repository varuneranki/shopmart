<template>
  <div>
    <v-carousel :cycle="cycle" interval="3000">
      <v-carousel-item
        v-for="deals in dailydeals"
        :key="deals.id"
        :src="deals.imageUrl"
        style="cursor:pointer"
      >
        <div class="title">{{deals.title}}</div>
      </v-carousel-item>
    </v-carousel>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in homecards">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover? 12: 2" :class="{'on-hover': hover}">
                <v-img :src="item.url"
                height="395px"> 
                
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cycle: true,
      homecards: [
        { title: "clothes", url: "https://i.postimg.cc/59SwJ43k/tshirt.jpg" },
        { title: "shoes", url: "https://i.postimg.cc/8c2fTY7D/shoes.jpg" },
        { title: "toys", url: "https://i.postimg.cc/0233Y0wS/toys.jpg" },
        { title: "electronics", url: "https://i.postimg.cc/Ls6gTLft/phone.jpg" },
        { title: "books", url: "https://i.postimg.cc/TPvvvvfQ/books.jpg" },
        { title: "games", url: "https://i.postimg.cc/43QqCK8N/games.jpg" }
      ]
    };
  },
  computed: {
    dailydeals() {
      console.log(this.$store.getters.loadedDeals);
      return this.$store.getters.loadedDeals;
    }
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  color: white;
  padding: 20px;
  text-align: center;
}

.v-card {
transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
opacity: 0.6;
 }
</style>
