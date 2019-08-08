import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Avatar from './Avatar';
import Avatarclass from './Avatarclass';
//import Demo from './Demo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Avatarclass />, document.getElementById('root'));
///ReactDOM.render(<Demo name="Hasnain" />, document.getElementById('root'));


serviceWorker.unregister();
