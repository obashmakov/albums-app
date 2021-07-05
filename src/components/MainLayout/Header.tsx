import React, { useState } from 'react';
import '../../styles/MainLayout/header.scss';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';

function Header(): JSX.Element {
  const [isClicked, setIsCLicked] = useState(false);

  return (
    <header className="header">
      <p className="header__title">
        Albums App
      </p>
      <div className="header__info">
        <Navigation isClicked={isClicked} />
      </div>
      <BurgerMenu isClicked={isClicked} setIsCLicked={setIsCLicked} />
    </header>
  );
}

export default Header;
