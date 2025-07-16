import React from 'react';

function App({ element, navigate, path }) {
  return (
    <div className={window.localStorage.getItem('theme') === 'dark' ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow-sm mb-4 mt-2">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold fs-3">Orchid Gallery</span>
          <div className="d-flex align-items-center gap-2">
            <button className={`nav-link btn btn-link${path === '/' ? ' active' : ''}`} onClick={() => navigate('/')}>Home</button>
            <button className={`nav-link btn btn-link${path === '/contact' ? ' active' : ''}`} onClick={() => navigate('/contact')}>Contact</button>
            <button className="btn btn-outline-secondary ms-2" onClick={() => {
              const theme = window.localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
              window.localStorage.setItem('theme', theme);
              window.location.reload();
            }}>
              Toggle {window.localStorage.getItem('theme') === 'dark' ? 'Light' : 'Dark'} Mode
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
