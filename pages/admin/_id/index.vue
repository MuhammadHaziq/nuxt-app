<template>
  <v-app>
    <v-container fluid grid-list-md>
      <v-layout row justify-start align-start row-wrap>
        <v-flex xs12 md12>
          <v-card class="pa-2" outlined tile>
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >{{ post.blog_name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  >by {{ post.blog_author }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="194"
            ></v-img>

            <v-card-text>
              {{ post.long_description }}
            </v-card-text>

            <v-card-actions>
              <v-btn text color="deep-purple accent-4" nuxt-link to="/admin">
                Back
              </v-btn>
              <v-btn text color="deep-purple accent-4">
                Bookmark
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['checkAuth', 'auth'],
  computed: {
    ...mapGetters({ post: 'blogStore/get_single_post' })
  },
  //  use when we need to get data from server side and add in data() of client side
  created() {
    this.$store.dispatch('blogStore/get_single_blog', this.$route.params.id)
  }
}
</script>
