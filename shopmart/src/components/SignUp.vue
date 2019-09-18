<template>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col
            :key="i"
            cols="12"
            md="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                hello
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
   
</template>


<script>
export default {

    data(){
        return {
             items: [
      {
        title: 'New Releases',
        text: "It's New Release Friday",
        subtext: 'Newly released songs. Updated daily.',
        img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
      },
      {
        title: 'Rock',
        text: 'Greatest Rock Hits',
        subtext: 'Lose yourself in rock tunes.',
        img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      },
      {
        title: 'Mellow Moods',
        text: 'Ambient Bass',
        subtext: 'Chill beats to mellow you out.',
        img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg',
      },
    ]
        }
    }

}
</script>
