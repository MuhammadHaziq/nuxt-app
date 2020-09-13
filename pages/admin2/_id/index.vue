<template>
  <v-app>
    <v-container fluid grid-list-md>
      <v-layout row justify-start align-start row-wrap>
        <v-flex xs12 md12>
          <v-card class="pa-2" outlined tile>
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  post.title
                }}</v-list-item-title>
                <v-list-item-subtitle>by {{ post.owner }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="post.image" height="194"></v-img>

            <v-card-text>
              {{ post.content }}
            </v-card-text>

            <v-card-actions>
              <v-btn text color="deep-purple accent-4" nuxt-link to="/posts">
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
/* eslint-disable */
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        post: {
          id: context.params.id,
          owner: 'Muhammad Haziq',
          title: 'Our Changing Planet post id(' + context.params.id + ')',
          image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
          content:
            'Visit ten places on our planet that are undergoing the biggest changes today.'
        }
      })
    }, 1500)
  }
}
</script>
