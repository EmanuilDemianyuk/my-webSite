import classNames from 'classnames';
import styles from './style.module.scss';
import userPhoto from 'src/assets/image/userPhoto.jpg';
import { Link } from 'react-scroll';
import PortfolioButton from 'src/components/PortfolioButton';

const Home = () => {
  return (
    <section
      id='home'
      className={styles.home}>
      <div className={classNames("container", styles.home__container)}>
        <div className={styles.home__user}>
          <div className={styles.home__userLogo}>
            <img src={userPhoto} alt="userLogo" />
          </div>

        </div>
        <div className={styles.home__textBlock}>
          <h2>Hello 👋</h2>
          <p>I'm <span>Emanuil Demianyuk</span></p>
          <p>and I'm a passionate FullStack Developer from Ukraine 📍</p>

          <div className={styles.home__btnGroup}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
            >
              <button>
                CONTACT ME
              </button>
            </Link >
            <PortfolioButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;