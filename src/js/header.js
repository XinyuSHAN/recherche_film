import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import Button from '@material-ui/core/Button'; 
import logo from '../img/logo_nobo.png'

var createReactClass = require('create-react-class');

 const header = createReactClass({
  render: function(){
  return (
      <header className="header">
        <div>
        <img src={logo} className="logo_movie" />
        <Button id ="register_button" variant='contained' color='#5e717f'>Register</Button>
        <Button id ="connect_button" variant='contained' color='#5e717f'>Connect</Button>
        </div>
        
      </header>
  );
  }

})

export default header;