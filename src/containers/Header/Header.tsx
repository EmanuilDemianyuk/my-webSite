import MainLogo from "src/components/MainLogo";
import NavLink from "src/components/Navigation";
import styles from './style.module.scss';
import classNames from "classnames";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={
        classNames(styles.header__container, "container")}>
        <MainLogo/>
        <NavLink/>
      </div>
    </header>
  )
}

export default Header