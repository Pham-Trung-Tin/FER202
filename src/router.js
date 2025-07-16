import React, { useState, useEffect } from 'react';
import Orchids from './components/Orchids';
import OrchidDetail from './components/OrchidDetail';
import Contact from './components/Contact';
import About from './components/About';
import App from './App';
import Naturals from './components/Naturals';
import Special from './components/Special';

// Simple router using react-router core (not react-router-dom)
function RouterApp() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
  };

  let element = null;
  if (path === '/') {
    element = React.createElement(Orchids, { navigate });
  } else if (path === '/naturals') {
    element = React.createElement(Naturals, { navigate });
  } else if (path === '/special') {
    element = React.createElement(Special, { navigate });
  } else if (path.startsWith('/orchid/')) {
    const id = path.split('/orchid/')[1];
    element = React.createElement(OrchidDetail, { id });
  } else if (path === '/contact') {
    element = React.createElement(Contact);
  } else if (path === '/about') {
    element = React.createElement(About);
  } else {
    element = React.createElement('div', { className: 'container py-5' }, React.createElement('h2', null, '404 Not Found'));
  }

  return React.createElement(App, { element, navigate, path });
}

export default RouterApp;
