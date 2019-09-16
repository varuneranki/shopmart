<template>
<v-carousel :cycle="cycle" interval="3000"> 
    <v-carousel-item  v-for="deals in dailydeals" :key="deals.id" :src="deals.imageUrl" style="cursor:pointer">
       <div class="title">{{deals.title}}</div>
    </v-carousel-item>
</v-carousel>
</template>

<script>

export default {
  data(){
    return {
      cycle: true
    }
  },
  computed: {    dailydeals () {
      console.log(this.$store.getters.loadedDeals)
      return this.$store.getters.loadedDeals
    }

  }
}
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
</style>
