<template>
  <v-container class="mt-12">
    <v-row v-if="error">
      <v-col xs="12" sm="6" offset-sm="3">
        <app-alert @dismissed="onDismiss" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onLogin">
                <v-row>
                  <v-col xs="12">
                    <v-text-field
                      name="email"
                      label="E-mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="12">
                    <v-text-field
                      name="password"
                      label="password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="6" cols="4">
                    <v-btn type="submit" align-center :disabled="loading" :loading="loading">
                      Log in
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>

                </v-row>
                <v-row>
                  <v-col xs="4" cols="8" >
                    <p>
                      or Sign in with Google
                      <v-btn icon class="social-button" @click="googleLogin" fab dark large color="purple">
                       <v-avatar> <img src="../assets/google.svg" alt="google"></v-avatar>
                      </v-btn>
                    </p>
                  </v-col>
                </v-row>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {

  data(){
    return {
      email: "",
      password: ""
    }
  }, 
  computed: {
     user(){
       return this.$store.getters.getUser;
     },
     error(){
       return this.$store.getters.error;
     },
     loading(){
       return this.$store.getters.loading;
     }
  },
  watch: {
    user: function(value){
      if(value !== null && value !== undefined){
        this.$router.push('/');
      }
    }
  },
  methods: {

    onLogin(){
      this.$store.dispatch("logIn", {
        email: this.email,
        password: this.password
      })
    },
    onDismiss() {
      this.$store.dispatch("clearError");
    },
    googleLogin(){
      this.$store.dispatch('googleLogin')
    }
  }
  
}
</script>


<style scoped>
.social_button{
  width: 75px;
  background: white;
  padding: 10px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  
}
</style>
