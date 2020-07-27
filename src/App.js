import React,{} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'; 
import './App.css';
import $ from  'jquery';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant='contained' color='primary'>按钮</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search a film 
        </a>
      </header>
    </div>
  );
}

export default App;
