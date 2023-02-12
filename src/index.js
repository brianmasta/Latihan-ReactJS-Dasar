import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Crud from './crud'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './crud/NavbarComponent'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent />
    <Crud />

  </React.StrictMode>
);

