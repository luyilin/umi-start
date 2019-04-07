import styles from './index.css';
import { connect } from 'dva';
import Link from 'umi/link'
import router from 'umi/router'

export default connect(({ count }) => ({ count }))(function(props) {
  const {
    count,
    dispatch
  } = props
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Link to="/"><button>go to index</button></Link>
      <button onClick={() => {
        router.push('/')
      }}>go to index</button>

      <p>{count}</p>
      <button onClick={() => {
        dispatch({
          type: 'count/add'
        })
      }}>+</button>
      <button onClick={() => {
        dispatch({
          type: 'count/minus'
        })
      }}>-</button>
      <br/>
      <button onClick={() => {
        dispatch({
          type: 'count/addAfter1Second'
        })
      }}>+ after 1s</button>
    </div>
  );
})
