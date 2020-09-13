<template>
  <v-app>
    <v-container fluid grid-list-md>
      <v-layout row justify-start align-start row-wrap>
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
export default {
  components: {
    PostCard
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          posts: [
            {
              id: 1,
              title: 'Our Changing Planet',
              image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
              content:
                'Visit ten places on our planet that are undergoing the biggest changes today.'
            },
            {
              id: 2,
              title: 'Our Changing Planet',
              image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
              content:
                'Visit ten places on our planet that are undergoing the biggest changes today.'
            },
            {
              id: 3,
              title: 'Our Changing Planet',
              image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
              content:
                'Visit ten places on our planet that are undergoing the biggest changes today.'
            },
            {
              id: 4,
              title: 'Our Changing Planet',
              image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
              content:
                'Visit ten places on our planet that are undergoing the biggest changes today.'
            },
            {
              id: 5,
              title: 'Our Changing Planet',
              image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
              content:
                'Visit ten places on our planet that are undergoing the biggest changes today.'
            },
            {
              id: 6,
              title: 'Our Changing Planet',
              image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
              content:
                'Visit ten places on our planet that are undergoing the biggest changes today.'
            }
          ]
        })
        //  there we can get then and catch also and set record in data variable
      }, 1500)
    }).catch((err) => {
      new Error(err.message)
    })
  }

  /*  use to load the data from server side to client side
 when we use this method for server side data then it will not good for seo beacuse page take time to load data from server request
 and seo carwaler call initially when page is created so resoolve this problem with ascynData() */

  // data: () => ({
  //   link: 'posts',
  //   posts: []
  //   posts: [
  //     {
  //       id: 1,
  //       title: 'Our Changing Planet',
  //       image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //       content:
  //         'Visit ten places on our planet that are undergoing the biggest changes today.'
  //     },
  //     {
  //       id: 2,
  //       title: 'Our Changing Planet',
  //       image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //       content:
  //         'Visit ten places on our planet that are undergoing the biggest changes today.'
  //     },
  //     {
  //       id: 3,
  //       title: 'Our Changing Planet',
  //       image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //       content:
  //         'Visit ten places on our planet that are undergoing the biggest changes today.'
  //     },
  //     {
  //       id: 4,
  //       title: 'Our Changing Planet',
  //       image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //       content:
  //         'Visit ten places on our planet that are undergoing the biggest changes today.'
  //     },
  //     {
  //       id: 5,
  //       title: 'Our Changing Planet',
  //       image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //       content:
  //         'Visit ten places on our planet that are undergoing the biggest changes today.'
  //     },
  //     {
  //       id: 6,
  //       title: 'Our Changing Planet',
  //       image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //       content:
  //         'Visit ten places on our planet that are undergoing the biggest changes today.'
  //     }
  //   ]
  // })
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
  // }
}
</script>
