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
        <div className={styles.mainLogo__con}>
          <span className={styles.mainLogo__first}>{"<"}</span>
          <span className={styles.mainLogo__second}>{"E"}</span>
          <span className={styles.mainLogo__third}>{"D"}</span>
          <span className={styles.mainLogo__fourth}>{"."}</span>
          <span className={styles.mainLogo__fifth}>{"D"}</span>
          <span className={styles.mainLogo__sixth}>{"E"}</span>
          <span className={styles.mainLogo__seventh}>{"V"}</span>
          <span className={styles.mainLogo__eighth}>{"/"}</span>
          <span className={styles.mainLogo__ninth}>{">"}</span>
        </div>
      </Link>
    </div>
  )
}

export default MainLogo;