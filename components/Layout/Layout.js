import React from 'react';
import PropTypes from 'prop-types';
import s from './Layout.scss';
import Header from '../Header';

const Layout = ({ hero, children }) => (
  <div className={s.root}>
    <Header>{hero}</Header>
    <main>
      {children}
    </main>
    <footer>
      <span>® Company Name</span>
    </footer>
  </div>
);

Layout.propTypes = {
  hero: PropTypes.element,
  children: PropTypes.element.isRequired
};

export default Layout;
