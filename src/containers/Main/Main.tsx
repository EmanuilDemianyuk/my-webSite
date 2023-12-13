import Home from 'src/Page/Home';
import About from 'src/Page/About';
import Projects from 'src/Page/Projects';
import Contact from 'src/Page/Contact';
import styles from './style.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default Main
