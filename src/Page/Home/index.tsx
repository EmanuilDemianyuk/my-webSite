import classNames from 'classnames';
import styles from './style.module.scss';
import userLogo from 'src/assets/image/userLogo.png';

const Home = () => {
  return (
    <section 
    id='home'
    className={styles.Home}>
      <div className={classNames("container", styles.Home__container)}>
          <div className={styles.Home__textBlock}>
            <h2>Hello 👋</h2>
            <p>I'm <span>Emanuil Demianyuk</span></p>
            <p>and I'm a passionate Front-end Developer from Ukraine 📍</p>

            <div className={styles.Home__btnGroup}>
              <button>CONTACT ME</button>
              <button>VIEW MY PORTFOLIO</button>
            </div>
          </div>
          <div className={styles.Home__user}>
            <div className={styles.Home__userLogo}>
              <img src={userLogo} alt="userLogo"/>
            </div>
            <div className={styles.Home__userLink}>

            </div>
          </div>
      </div>
    </section>
  )
}

export default Home;