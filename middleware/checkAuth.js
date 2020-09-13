export default function(context) {
  console.log('[Middleware] Check Auth')
  // if (process.client) {
  context.store.dispatch('authStore/setAuth', context.req)
  // }
}
