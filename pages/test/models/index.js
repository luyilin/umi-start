import { delay } from 'dva/saga'

export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add(count) {
      return ++count
    },
    minus(count) {
      return --count
    }
  },
  effects: {
    *addAfter1Second(action, { call, put }) {
      yield call(delay, 1000)
      yield put({
        type: 'add'
      })
    }
  }
}