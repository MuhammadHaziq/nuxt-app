<template>
  <v-app>
    <v-layout column justify-center align-center>
      <v-card :loading="dd" elevation="20" min-width="400" class="rounded-xl">
        <v-form @submit.prevent="onSubmit">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <Input
                    v-model="username"
                    label="User Name"
                    :messages="userNameErrors"
                    :v="$v.username"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :v="$v.password"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    :error-messages="passwordErrors"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12" sm="12" md="12">
                  <Input
                    v-model="password"
                    label="Password"
                    :messages="passwordErrors"
                    :v="$v.password"
                    hint="At least 8 characters"
                    type="password"
                  />
                </v-col> -->
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <Button
              type="button"
              link="/admin/auth/signup"
              color="red darken-1"
              :text="text"
              @clickFunction="reserve"
            >
              Close
            </Button>
            <Button type="submit" color="blue darken-1" :text="text">
              Submit
            </Button>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-app>
</template>
<script>
/* eslint-disable-next-line */
/* eslint-disable */
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import { mapState, mapGetters } from 'vuex'
export default {
  // watchQuery: true,
  name: 'LoginForm',
  mixins: [validationMixin],

  validations: {
    username: { required, email },
    password: {
      required,
      minLength: minLength(5)
    }
  },
  asyncData: (context) => ({
    username: '',
    password: '',
    // loading: false,
    show1: false,
    text: true
  }),
  computed: {
    userNameErrors() {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.email &&
        errors.push('User Name Must Be An Email (someone@one.com)')
      !this.$v.username.required && errors.push('User Name Is Required.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push('Password must be at least 5 characters long')
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },
    ...mapState({
      isLoading: (state) => state.authStore.isLoading
    }),
    ...mapGetters({ dd: 'authStore/is_loading' })
  },

  methods: {
    updateLoading() {
      this.$store.commit('authStore/IS_LOADING', { loading: false })
    },
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    onSubmit() {
      console.log(this.isLoading)
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // this.loading = true
        const data = {
          email: this.username,
          password: this.password
        }
        this.$store.dispatch('authStore/login_admin', data)
        console.log(data)
      }
    }
    // dialog = false
  },
  watch: {
    isLoading: function(newVal) {
      console.log(newVal)

      if (newVal === false) {
        this.updateLoading()
      }
    }
  }
}
</script>
