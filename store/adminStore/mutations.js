/* eslint-disable-next-line */
/* eslint-disable */

export const GET_USER_BLOGS = (state, data) => {
  state.get_user_posts = data
}
export const UPDATE_BLOG_POST = (state, data) => {
  const get_user_posts = state.get_user_posts.map((item) => {
    if (item.id === data.blog_id) {
      return {
        ...item,
        blog_author: data.blog_author,
        blog_name: data.blog_name,
        long_description: data.long_description,
        short_description: data.short_description
      }
    }
    return item
  })
  state.get_user_posts = get_user_posts
}

export const CREATE_BLOG_POST = (state, data) => {
  return { ...state.get_user_posts, data }
}
