import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import Top from './navbar.js';
import Hero from './hero.js'


import Crd from './card.js'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Top/>
    <Hero/>
    <Crd />
    
  </React.StrictMode>
);


reportWebVitals();
