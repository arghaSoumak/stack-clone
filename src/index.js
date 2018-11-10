import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// css
import './index.css';
//app component
import App from './App';

//render app in dom  
const root =  document.getElementById('root')
ReactDOM.render(<App />, root);

/*for pwa*/
serviceWorker.unregister();
