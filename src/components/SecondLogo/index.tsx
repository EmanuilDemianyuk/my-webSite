import { Link } from 'react-scroll';
import styles from './style.module.scss';

const SecondLogo = () => {
  return (
    <div className={styles.secondLogo}>
    <Link
      to="home"
      smooth={true}
      duration={500}
    >
        <div className={styles.secondLogo__container}>
          <span>{"<"}</span>
          <span>{"E"}</span>
          <span>{"D"}</span>
          <span>{"."}</span>
          <span>{"D"}</span>
          <span>{"E"}</span>
          <span>{"V"}</span>
          <span>{"/"}</span>
          <span>{">"}</span>
        </div>
      </Link>
    </div>
  )
}

export default SecondLogo