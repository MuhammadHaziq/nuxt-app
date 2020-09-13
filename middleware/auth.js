export default function({ store, redirect }) {
  console.log('[Middleware] Auth')
  // if (process.client) {
  //   if (!localStorage.getItem('Authorization')) {
  //     redirect('/auth/login')
  //   }
  // }
  if (!store.state.authStore.token) {
    redirect('/auth/login')
  }
  // console.log(store.state.authStore.token)
  // if (!store.authStore.token) {
  //   redirect('/')
  // }
}
