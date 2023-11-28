import { Link } from 'react-scroll';
import styles from './style.module.scss';

const MainLogo = () => {
  return (
    <div className={styles.mainLogo}>
      <Link
      to="home"
      smooth={true}
      duration={500}
      >
        <h1>{"<ED.Dev/>"}</h1>
      </Link>
    </div>
  )
}

export default MainLogo;