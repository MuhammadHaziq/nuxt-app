export default function({ $axios, store }) {
  $axios.onRequest((config) => {
    console.log(store.state.authStore.token)
    config.headers.common.Authorization = `${'Bearer ' +
      store.state.authStore.token}`
    // config.headers.common['access-token'] = store.state.authStore.token
    // config.headers.common['token-type'] = store.state.user.headers.token_type
    // config.headers.common['client'] = store.state.user.headers.client
    // config.headers.common['expiry'] = store.state.user.headers.expiry
    // config.headers.common['uid'] = store.state.user.headers.uid
  })
}
