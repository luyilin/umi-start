import Link from 'umi/link';
import styles from './index.css';

// umi 路由跳转有两种 声明式，通过组件跳转，本例；命令式，通过 umi/router 暴露很多跟路由跳转相关的命令

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Link to="/users"><button>go to /users</button></Link>
    </div>
  );
}
