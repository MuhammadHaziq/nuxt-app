import Vuex from 'vuex'
import blogStore from './blogStore/index'
import authStore from './authStore/index'
import adminStore from './adminStore/index'
const createStore = () => {
  return new Vuex.Store({
    // actions: {
    //   nuxtServerInit(context) {
    //     let cookieToken = Cookies.get('Authorization')
    //     if (!cookieToken) {
    //       return false
    //     }
    //     cookieToken = cookieToken.split(' ')[1]
    //     context.dispatch('authStore/set_user_detail', cookieToken)
    //     console.log('nuxtServerInit', cookieToken)
    //   }
    // },
    modules: {
      blogStore,
      authStore,
      adminStore
    }
  })
}
export default createStore
