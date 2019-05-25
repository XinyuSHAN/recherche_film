import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import $ from  'jquery'

var createReactClass = require('create-react-class');

 const footer = createReactClass({
render: function(){
  return (
      <footer className="footer">
          <div>Posted by: Xinyu SHAN</div>
        
      </footer>
  );
  }

})

export default footer;