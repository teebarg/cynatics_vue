// import store from '@/store'
// import { MAIN } from '@/store/mutants'

export class Utility {
  constructor () {
    this.debounced = undefined
  }

  static getQueryParams (params) {
    if (typeof params === 'object') {
      const result = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      return `?${result}`
    }
    return params
  }

  static removeBlankObjectFields(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
        delete obj[propName];
      }
    }
    return obj;
  }

  static debounce (func, time = 100) {
    clearTimeout(this.debounced)
    this.debounced = setTimeout(func, time)
  }
}
