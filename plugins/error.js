export default ({ store }, inject) => {
  const commitError = (data = []) => {
    store.commit('error/createError', data)
  }
  const clearError = () => {
    store.commit('error/createError', null)
  }
  inject('clearError', clearError)
  inject('commitError', commitError)
}
