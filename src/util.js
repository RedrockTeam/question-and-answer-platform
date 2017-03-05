let ls = window.localStorage

export default {
  ls: {
    set(key, value) {
      if(!(key && value)) {
        return console.error('localStorage key and value must not empty')
      }
      if(typeof value === 'object') {
        ls.setItem(key, JSON.stringify(value))
      } else {
        ls.setItem(key, value)
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
      return value
    }
  }
}
