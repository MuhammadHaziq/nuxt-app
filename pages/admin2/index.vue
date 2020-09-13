<template>
  <v-app>
    <v-container fluid grid-list-md>
      <v-layout row justify-end align-end row-nowrap>
        <v-btn color="blue darken-1" text @click="modalToggle">Add Blog</v-btn>
        <BlogForm :showModal="showModal" @openModel="modalToggle" />
      </v-layout>
      <v-layout row justify-start align-start row-wrap>
        <!-- @inputFunction="getData" -->

        <v-flex v-for="(blogPost, index) in posts" :key="index" xs12 md4>
          <PostCard :post="blogPost" :link="link" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
/* eslint-disable */
import PostCard from '~/components/posts/PostCard'
import BlogForm from '~/components/form/BlogForm'
export default {
  components: {
    BlogForm,
    PostCard
  },
  asyncData(context, callback) {
    //   setTimeout(() => {
    //     callback(null, {
    //       posts: [
    //         {
    //           id: 1,
    //           title: 'Our Changing Planet',
    //           image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
    //           content:
    //             'Visit ten places on our planet that are undergoing the biggest changes today.'
    //         },
    //         {
    //           id: 2,
    //           title: 'Our Changing Planet',
    //           image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
    //           content:
    //             'Visit ten places on our planet that are undergoing the biggest changes today.'
    //         },
    //         {
    //           id: 3,
    //           title: 'Our Changing Planet',
    //           image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
    //           content:
    //             'Visit ten places on our planet that are undergoing the biggest changes today.'
    //         },
    //         {
    //           id: 4,
    //           title: 'Our Changing Planet',
    //           image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
    //           content:
    //             'Visit ten places on our planet that are undergoing the biggest changes today.'
    //         },
    //         {
    //           id: 5,
    //           title: 'Our Changing Planet',
    //           image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
    //           content:
    //             'Visit ten places on our planet that are undergoing the biggest changes today.'
    //         },
    //         {
    //           id: 6,
    //           title: 'Our Changing Planet',
    //           image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
    //           content:
    //             'Visit ten places on our planet that are undergoing the biggest changes today.'
    //         }
    //       ],
    //       link: 'admin',
    //       showModal: false
    //     })
    //   }, 1500)
  },
  // data: () => ({
  //   link: 'admin',
  //   posts: [],
  //   showModal: false
  // }),
  /*  use to load the data from server side to client side
 when we use this method for server side data then it will not good for seo beacuse page take time to load data from server request
 and seo carwaler call initially when page is created so resoolve this problem with ascynData() */
  // created() {
  //   setTimeout(() => {
  //     this.posts = [
  //       {
  //         id: 1,
  //         title: 'Our Changing Planet',
  //         image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //         content:
  //           'Visit ten places on our planet that are undergoing the biggest changes today.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Our Changing Planet',
  //         image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //         content:
  //           'Visit ten places on our planet that are undergoing the biggest changes today.'
  //       },
  //       {
  //         id: 3,
  //         title: 'Our Changing Planet',
  //         image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //         content:
  //           'Visit ten places on our planet that are undergoing the biggest changes today.'
  //       },
  //       {
  //         id: 4,
  //         title: 'Our Changing Planet',
  //         image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //         content:
  //           'Visit ten places on our planet that are undergoing the biggest changes today.'
  //       },
  //       {
  //         id: 5,
  //         title: 'Our Changing Planet',
  //         image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //         content:
  //           'Visit ten places on our planet that are undergoing the biggest changes today.'
  //       },
  //       {
  //         id: 6,
  //         title: 'Our Changing Planet',
  //         image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //         content:
  //           'Visit ten places on our planet that are undergoing the biggest changes today.'
  //       }
  //     ]
  //   }, 1500)
  // },
  methods: {
    getData(value) {
      console.log(this.blog.name)
    },
    modalToggle() {
      this.showModal = !this.showModal
    }

    // dialog = false
  }
}
</script>
