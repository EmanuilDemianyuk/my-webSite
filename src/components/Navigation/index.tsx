import { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { BurgerMenu } from './BurgerMenu';
import ThemeSwitch from './ThemeSwitch';

const Navigation = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth <= 780 ? setBurgerMenu(true) : setBurgerMenu(false),
    );
  }, [burgerMenu]);

  return (
    <div>
      {
       burgerMenu 
       ? <BurgerMenu/> 
       : <div>
          <ThemeSwitch/>
          <NavLink/>
        </div>
      }
    </div>
  )
}

export default Navigation;