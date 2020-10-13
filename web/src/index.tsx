import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*Importando o css usado na aplicaçãp*/
import './styles/global.css';

/*Renderizando os apps no DOM*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
