import classNames from 'classnames';
import styles from './style.module.scss';
import userLogo from 'src/assets/image/userLogo.png';

const Home = () => {
  return (
    <section 
    id='home'
    className={styles.home}>
      <div className={classNames("container", styles.home__container)}>
          <div className={styles.home__textBlock}>
            <h2>Hello 👋</h2>
            <p>I'm <span>Emanuil Demianyuk</span></p>
            <p>and I'm a passionate Front-end Developer from Ukraine 📍</p>

            <div className={styles.home__btnGroup}>
              <button>CONTACT ME</button>
              <button>VIEW MY PORTFOLIO</button>
            </div>
          </div>
          <div className={styles.home__user}>
            <div className={styles.home__userLogo}>
              <img src={userLogo} alt="userLogo"/>
            </div>
            <div className={styles.home__userLink}>

            </div>
          </div>
      </div>
    </section>
  )
}

export default Home;