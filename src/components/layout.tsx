import React from 'react';
import Header from './header/header';
import Footer from './footer';

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
