/* eslint-disable-next-line */
/* eslint-disable */

export const IS_LOADING = (state, payload) => {
  state.isLoading = payload.loading
}
export const LOGIN_SUCCESS = (state, payload) => {
  state.auth = payload.auth
  state.token = payload.token
  state.userDetail = payload.userDetail
}
export const LOGIN_FAIL = (state, payload) => {
  state.auth = payload.auth
}
export const LOGOUT = (state) => {
  state.auth = false
  state.token = ''
}
