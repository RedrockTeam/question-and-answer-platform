let ls = window.localStorage

export default {
  ls: {
    set(key, value) {
      if(typeof value === 'object') {
        ls.setItem(key, JSON.stringify(value))
      }
    },
    get(key) {
      let value = ls.getItem(key)
      try {
        value = JSON.parse(value)
        return value
      } catch(e) {
        console.error(e)
      }
      return ls.getItem(key)
    }
  }
}
