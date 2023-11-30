import NavLink from './NavLink';
import { BurgerMenu } from './BurgerMenu';
import ThemeSwitch from './ThemeSwitch';
import styles from './style.module.scss';

const Navigation = () => {

  return (
    <>
      <div className={styles.Mobile}>
        <BurgerMenu/> 
      </div>
      <div className={styles.Desc}>
        <ThemeSwitch/>
        <NavLink/>
      </div>
    </>
  )
}

export default Navigation;