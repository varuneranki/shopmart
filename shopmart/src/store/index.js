import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

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

    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }

  },
  actions: {
    signUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    logIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)

            const newUser = {
              id: user.user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(error => {
          commit('setLoading', true)
          commit('setError', error)
          console.log(error)
        })
    },
    googleLogin ({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(
        (result) => {
          this.$router.push('/')
        }
      ).catch((error) => {
        console.log(error)
      })
    },
    clearError ({ commit }) {
      commit('clearError')
    }

  },
  getters: {
    loadedDeals (state) {
      return state.loadedDeals
    },
    getUser (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
