import { useContext } from 'react';
import styles from './style.module.scss';
import { ThemeContext } from 'src/context';

const ThemeSwitch = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

    return (
      <div className={styles.con}>
        <input
          type="checkbox"
          id="themeSwitch"
          name="theme-switch"
          checked={!theme}
          className={styles.con__themeSwitch}
          onChange={changeTheme}
        />
        <label htmlFor="themeSwitch" className={styles.con__themeLabel}>
          <span></span>
        </label>
      </div>
    );
  }
  
  export default ThemeSwitch;