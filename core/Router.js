import React from 'react';
import Context from '../components/Context';

const routes = [
  require('../routes/Home').default,
  require('../routes/NotFound').default,
  require('../routes/ServerError').default,
  require('../routes/PrivacyPage').default
];

const router = {
  match(location, state) {
    let component;
    const page = {
      title: 'My Application',
      description: 'Isomorphic web application sample',
      status: 200
    };
    const route = routes.find(x => x.path === location.path);

    if (route) {
      try {
        component = route.action();
      } catch (err) {
        component = routes.find(x => x.path === '/500').action();
      }
    } else {
      component = routes.find(x => x.path === '/404').action();
    }

    return <Context {...state} page={page}>{component}</Context>;
  }
};

export default router;
