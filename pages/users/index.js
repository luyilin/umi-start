import router from 'umi/router';
import { connect } from 'dva';
import { Component } from 'react';
import styles from './users.css';

@connect(({ count }) => ({
  count
}))
class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    const {
      count,
      dispatch
    } = this.props
    return (
        <div className={styles.normal}>
          <h1>Page users</h1>
          <button onClick={() => {
            router.goBack()
          }}>go back</button>
          <p>{count}</p>
          <button onClick={() => {
            dispatch({
              type: 'count/add',
              payload: 1
            })
          }}>+</button>
          <button onClick={() => {
            dispatch({
              type: 'count/minus'
            })
          }}>-</button>
        </div>
    )
  }
}

export default Index;
