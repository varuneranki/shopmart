import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedDeals: [{
      imageUrl: 'https://i.postimg.cc/D0NCCRS7/deal1.jpg',
      id: '1',
      title: 'Fashions sale'
    },
    {
      imageUrl: 'https://i.postimg.cc/G3NcCDSK/deal2.jpg',
      id: '2',
      title: 'New item on the list'
    },
    {
      imageUrl: 'https://i.postimg.cc/C56Cv7FW/deal3.jpg',
      id: '3',
      title: 'Tasty sandwich'
    },
    {
      imageUrl: 'https://i.postimg.cc/JnYBmh9X/deal4.jpg',
      id: '4',
      title: 'Tasty sandwich'
    }

    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadedDeals (state) {
      return state.loadedDeals
    }
  }
})
