import { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { BurgerMenu } from './BurgerMenu';

const Navigation = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth <= 720 ? setBurgerMenu(true) : setBurgerMenu(false),
    );
  }, [burgerMenu]);

  return (
    <div>
      {
       burgerMenu ? <BurgerMenu/> : <NavLink/>
      }
    </div>
  )
}

export default Navigation;