import React from 'react';
import useTheme from './components/useTheme';

function App({ element, navigate, path }) {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className={isDark ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <nav className={`navbar navbar-expand-lg rounded shadow-sm mb-4 mt-2 ${isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold fs-3">Orchid Gallery</span>
          <div className="d-flex align-items-center gap-2">
            <button className={`nav-link btn btn-link${path === '/' ? ' active' : ''} ${isDark ? 'text-light' : 'text-dark'}`} onClick={() => navigate('/')}>Home</button>
            <button className={`nav-link btn btn-link${path === '/contact' ? ' active' : ''} ${isDark ? 'text-light' : 'text-dark'}`} onClick={() => navigate('/contact')}>Contact</button>
            <button className={`btn ms-2 ${isDark ? 'btn-outline-light' : 'btn-outline-secondary'}`} onClick={toggleTheme}>
              Toggle {isDark ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      </nav>
      <div className="container py-3">
        {element}
      </div>
    </div>
  );
}

export default App;
