import { LOCAL_CACHE_KEY } from '../misc/constants'

const ls = window.localStorage

const install = (Vue) => {
  Vue.prototype.$getLocal = (key = LOCAL_CACHE_KEY) => {
    const item = ls.getItem(key)
    if (!item) { return null }
    try {
      return JSON.parse(ls.getItem(key))
    } catch (e) {
      throw new Error('The item you are trying to get is not an object.')
    }
  }
  Vue.prototype.$setLocal = (item, key = LOCAL_CACHE_KEY) => {
    if (!(item instanceof Object)) {
      throw new Error('The item you are trying to store is not an object.')
    }
    ls.setItem(key, JSON.stringify(item))
  }
}
export default {
  install
}
