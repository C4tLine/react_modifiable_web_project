import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { store } from './store/store.jsx' 
import { Provider } from 'react-redux'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
);
