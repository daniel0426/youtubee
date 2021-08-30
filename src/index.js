import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Network from './service/network';

const network = new Network(process.env.REACT_APP_NETWORK_API_KEY)

ReactDOM.render(
  <React.StrictMode>
    <App network={network}/>
  </React.StrictMode>,
  document.getElementById('root')
);
 