import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import '../../styles/MainLayout/nav.scss';

const routes = [
  {
    name: 'home',
    pathname: '/',
  },
  {
    name: 'about',
    pathname: '/about',
  },
  {
    name: 'contacts',
    pathname: '/contacts',
  },
];

interface NavigationProps {
  isClicked: boolean;
}

function Navigation({ isClicked }: NavigationProps): JSX.Element {
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    const { pathname } = window.location;
    setCurrentRoute(pathname);
  }, []);
  return (
    <nav
      id="navigation"
      className={cx({
        nav: true,
        'nav--active': isClicked,
        'nav--notActive': !isClicked,
      })}
    >
      <ul className={cx({
        nav__list: true,
        'nav__list--active': isClicked,
      })}
      >
        {routes.map((route) => (
          <li key={`Route name ${route.name}`} className="nav__item">
            <a
              className={cx({
                nav__link: true,
                'nav__link--active': currentRoute === route.pathname,
              })}
              href={route.pathname}
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
