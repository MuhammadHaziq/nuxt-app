/* eslint-disable-next-line */
/* eslint-disable */

import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
export const login_admin = async function(vueContext, data) {
  vueContext.commit('IS_LOADING', { loading: true })
  this.$axios
    .post('/admin/login', data)
    .then((response) => {
      const tokenData = jwtDecode(response.data.token)
      setTimeout(() => {
        localStorage.setItem('Authorization', `Bearer ${response.data.token}`)
        localStorage.setItem(
          'ExpTime',
          new Date().getTime() + tokenData.exp * 1000
        )
        Cookies.set('Authorization', `Bearer ${response.data.token}`)
        Cookies.set('ExpTime', new Date().getTime() + tokenData.exp * 1000)
        vueContext.commit('IS_LOADING', { loading: false })
        vueContext.dispatch('set_user_detail', response.data.token)
        this.$router.push('/admin')
      }, 1500)
    })
    .catch((err) => {
      // console.log(err.response)
      if (err.response.status == 401) {
        this.$router.push('/auth/login')
        vueContext.commit('IS_LOADING', { loading: false })
        vueContext.commit('LOGIN_FAIL', { auth: false })
      }
      vueContext.commit('IS_LOADING', { loading: false })
      vueContext.commit('LOGIN_FAIL', { auth: false })
      // console.log(err.message)
    })
}
export const set_user_detail = (vueContext, token) => {
  vueContext.commit('LOGIN_SUCCESS', {
    auth: true,
    token: token,
    userDetail: jwtDecode(token)
  })
}
export const logout_user = (vueContext) => {
  if (process.client) {
    localStorage.removeItem('Authorization')
  }
  Cookies.remove('Authorization')
  vueContext.commit('LOGOUT')
}
export const setAuth = (vuexContext, req) => {
  let token
  let expirationTime
  if (req) {
    const cookieTime = req.headers.cookie
      .split(';')
      .find((c) => c.trim().startsWith('ExpTime='))
      .split('=')[1]
    if (new Date().getTime() > +cookieTime || !req.headers.cookie) {
      vuexContext.dispatch('logout_user')
      return false
    }
    const cookieToken = req.headers.cookie
      .split(';')
      .find((c) => c.trim().startsWith('Authorization='))
    if (!cookieToken) {
      vuexContext.dispatch('logout_user')
      return false
    }

    token = cookieToken.split('=')[1]
    token = token.split('Bearer%20')[1]
  } else {
    token = localStorage.getItem('Authorization')
    expirationTime = localStorage.getItem('ExpTime')
    if (new Date().getTime() > +expirationTime || !token) {
      vuexContext.dispatch('logout_user')
      return false
    }
    token = token.split(' ')[1]
  }
  vuexContext.dispatch('set_user_detail', token)
  // vuexContext.commit('LOGIN_SUCCESS', { auth: true, token: token })
}
