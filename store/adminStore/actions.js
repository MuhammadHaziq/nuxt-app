/* eslint-disable-next-line */
/* eslint-disable */
export const get_user_blogs = async function(vuexContext, data) {
  try {
    await this.$axios
      .get(`/admin/get_blog/${data.user_id}`)
      .then((response) => {
        vuexContext.commit('GET_USER_BLOGS', response.data.data)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.$router.push('/auth/login')
        }
        console.log(err.message)
      })
  } catch (err) {
    console.log(err.message)
  }
}

export const create_blog_post = async function(vuexContext, data) {
  try {
    await this.$axios
      .post(`/admin/create_blog`, data)
      .then((response) => {
        vuexContext.commit('CREATE_BLOG_POST', response)
        console.log(response)
      })
      .catch((err) => {
        console.log(err.message)
      })
  } catch (err) {
    console.log(err.message)
  }
}

export const update_blog_detail = async function(vuexContext, data) {
  try {
    await this.$axios
      .put(`/admin/update/${data.blog_id}`, data)
      .then((response) => {
        vuexContext.commit('UPDATE_BLOG_POST', data)
        console.log(response)
      })
      .catch((err) => {
        console.log(err.message)
      })
  } catch (err) {
    console.log(err.message)
  }
}
