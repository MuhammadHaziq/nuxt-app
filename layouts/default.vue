<template>
  <v-card class="overflow-hidden">
    <v-navigation-drawer v-model="drawer" app :src="image">
      <NavLinks :items="items" />

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="#fcb69f" dark hide-on-scroll app :src="image">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn icon nuxt-link to="/auth/login">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Nuxt />
    </v-content>
    <v-footer app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-card>
</template>
<script>
import NavLinks from '~/components/NavLinks'
export default {
  components: {
    NavLinks
  },
  // props: { // source: String, // default: '' // },

  data: () => ({
    drawer: null,
    image: 'https://picsum.photos/1920/1080?random',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
      { title: 'Account', icon: 'mdi-account-box', link: '/inspire' },
      { title: 'Users', icon: 'mdi-gavel', link: '/users' },
      { title: 'Blog Posts', icon: 'mdi-blogger', link: '/posts' },
      { title: 'Admin', icon: 'mdi-account-plus', link: '/admin' }
    ]
  }),

  methods: {
    logout() {
      this.$store.dispatch('authStore/logout_user')
      this.$router.push('/')
    }
  }
}
</script>
