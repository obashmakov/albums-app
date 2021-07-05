import React, { Dispatch, SetStateAction } from 'react';
import cx from 'classnames';
import '../../styles/MainLayout/burgerMenu.scss';

interface BurgerMenuProps {
  setIsCLicked: Dispatch<SetStateAction<boolean>>;
  isClicked: boolean;
}

function BurgerMenu({ setIsCLicked, isClicked }: BurgerMenuProps): JSX.Element {
  const handleClick = () => {
    const navigation = document.getElementById('navigation');
    console.log(navigation);

    if (isClicked) {
      navigation?.classList.add('nav--close');
      setTimeout(() => {
        setIsCLicked(false);
        navigation?.classList.remove('nav--close');
      }, 200);
    }
    setIsCLicked(true);
  };

  return (
    <button
      id="burgerButton"
      type="button"
      className="burger"
      onClick={handleClick}
    >
      <div className={cx({
        burger__bar1: true,
        'burger__bar1--active': isClicked,
      })}
      />
      <div className={cx({
        burger__bar2: true,
        'burger__bar2--active': isClicked,
      })}
      />
      <div className={cx({
        burger__bar3: true,
        'burger__bar3--active': isClicked,
      })}
      />
    </button>
  );
}

export default BurgerMenu;
