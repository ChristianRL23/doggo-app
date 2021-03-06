import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalContextProvider } from './context/modalContext';

ReactDOM.render(
  <ModalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ModalContextProvider>,
  document.getElementById('root')
);
