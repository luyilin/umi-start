export default ({
  namespaces: 'count',
  state: 0,
  reducers: {
    add(count) {
      return ++count
    },
    minus(count) {
      return --count
    }
  }
})