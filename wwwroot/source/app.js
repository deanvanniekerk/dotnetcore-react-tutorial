import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
ReactDOM.render(
   <Message />,
   document.getElementById('root')
);
module.hot.accept();