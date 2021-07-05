import React from 'react';
import '../../styles/MainLayout/main.scss';
import { MainLayoutProps } from '../../types/mainLayout.interface';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
