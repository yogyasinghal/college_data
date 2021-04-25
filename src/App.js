// import logo from './logo.svg';
import './App.css';
import React,{ useEffect} from 'react';
import Register from './Components/Register';
import Main from './Components/Main';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path = '/' component = {Main}/>
      <Route path = '/register' component = {Register}/>
    </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
