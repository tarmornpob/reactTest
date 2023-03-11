import logo from './logo.svg';
import './css/App.css';
import Navbar from './Navbar';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class LoginButton extends Component {
  render() {
    return (
        <button type="button">ปุ่มกด</button>
      );
  }
}

class NavbarH extends Component {

  constructor(props) {
    super(props);
    
      this.state = {};
  }

  thx() {
    return "ขอบคุณ";
  }

  render() {
  return (
    <div>ทดสอบ {this.thx()} <LoginButton/></div>
  );
  }
}

function fnHello() {
 
  return(
    "Hello World ! from my-react testing.."
    );

}

function TestRoute() {

  return (
    <BrowserRouter>

    <Routes>

      <Route path="/nav" component="{<App />}"/>

    </Routes>
   </BrowserRouter>

    );

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
        <fnHello/>
          Edit <code>src/App.js</code> and save to reload.s
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default TestRoute;