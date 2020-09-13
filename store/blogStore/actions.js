/* eslint-disable-next-line */
/* eslint-disable */

export const get_blog_posts = async function(vueContext) {
  await this.$axios
    .$get('/')
    .then((response) => {
      vueContext.commit('GET_BLOG_POSTS', response.data)
    })
    .catch((err) => {
      // console.log(err)
    })
}
export const get_single_blog = async function(vueContext, id) {
  await this.$axios(`/${id}`)
    .then((response) => {
      console.log(response.data.data)
      vueContext.commit('GET_SINGLE_POST', response.data.data)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

// await setTimeout(() => {
//   vueContext.commit('GET_BLOG_POSTS', [
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
//   ])
// }, 1500)
