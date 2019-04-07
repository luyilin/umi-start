export default ({
  namespaces: 'count',
  state: 0,
  reducers: {
    add(index) {
      return ++index
    },
    minus(count) {
      return --count
    }
  }
})