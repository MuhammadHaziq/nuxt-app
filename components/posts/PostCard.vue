<template>
  <div>
    <v-card class="pa-2" outlined tile>
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{
            post.blog_name
          }}</v-list-item-title>
          <v-list-item-subtitle>by {{ post.blog_author }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <nuxt-link :to="link + '/' + post.id">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
          height="194"
        ></v-img>
      </nuxt-link>

      <v-card-text>
        {{ post.short_description }}
      </v-card-text>

      <v-card-actions>
        <v-btn text color="deep-purple accent-4" nuxt-link :to="readLink">
          <!-- :to="link + '/' + post.id" -->
          Read
        </v-btn>
        <v-btn v-if="link == 'posts'" text color="deep-purple accent-4">
          Bookmark
        </v-btn>
        <v-btn
          v-if="link == 'admin'"
          text
          color="deep-purple accent-4"
          @click="modelToggleUpdate(post)"
        >
          Update
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
    <UpdateBlogForm
      :showModal="updateModel"
      :blogData="updatePost"
      @openModelUpdate="modelUpdateClose"
    />
  </div>
</template>
<script>
import UpdateBlogForm from '../form/UpdateBlogForm'
export default {
  name: 'PostCard',
  components: {
    UpdateBlogForm
  },

  props: {
    post: {
      type: Object,
      default: () => {}
    },
    link: {
      type: String,
      default: 'posts'
    }
  },
  data: () => ({
    updateModel: false,
    updatePost: {}
  }),
  computed: {
    linkName() {
      return this.link || 'posts'
    },
    readLink() {
      return this.link + '/' + this.post.id
    }
  },
  watch: {
    link(n, o) {
      // this.blog = this.blogData
      console.log('blogData', n, o) // n is the new value, o is the old value.
    }
  },
  methods: {
    modelToggleUpdate(data) {
      console.log(data)
      this.updateModel = !this.updateModel
      this.updatePost = data
    },
    modelUpdateClose() {
      this.updateModel = !this.updateModel
      this.updatePost = {}
    }
  }
}
</script>
