export const state = () => ({
  snackbar: { showing: false }
})

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  },

  permissions (state) {
    return state.permission.permissions
  },

  countries (state) {
    return state.country.countries
  },

  odd (state) {
    return state.odd.odds
  }
}
