import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Head from './js/header.js';
import Foot from './js/footer.js';
import RouteMap from './js/routeMap.js';


ReactDOM.render(<Head />, document.getElementById('headerPage'));
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Foot />, document.getElementById('footerPage'));

ReactDOM.render( <RouteMap />,document.getElementById('root'));