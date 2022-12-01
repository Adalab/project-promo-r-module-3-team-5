import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Lo comento por que sino me da error.
  //Así es como está ahora
  /*
    <HashRouter>
      <App />
    </HashRouter>
  */
  //Lo he dejado como antes para que no me de error
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
