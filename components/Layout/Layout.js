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
      <span>® Company Names</span>
    </footer>
  </div>
);

Layout.propTypes = {
  hero: PropTypes.element,
  children: PropTypes.element.isRequired
};

export default Layout;

let style;

function insertCSS(css) {
  const elem = document.createElement('style');
  elem.textContent = css;
  document.head.appendChild(elem);
  return {
    remove: () => {
      document.head.removeChild(elem);
    }
  };
}


if (typeof document !== 'undefined') {
  style = insertCSS(require('./test').default);
}

if (module.hot) {
  module.hot.accept('./test', () => {
    style = insertCSS(require('./test').default);
  });

  module.hot.dispose(() => {
    console.log('see in console');
    style.remove();
  });
}
