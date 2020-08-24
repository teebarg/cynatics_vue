export default (ctx, inject) => {
  const query = (params) => {
    if (typeof params === 'object') {
      const result = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      return `?${result}`
    }
    return params
  }
  inject('getParams', query)
}
