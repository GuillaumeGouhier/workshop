import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';

import Home from './components/home';
import Input from './components/Input';
import Login from './components/login';
import Register from './components/register';
import Searchform from './components/searchform';
import Usermenu from './components/usermenu';
import Party_form from './components/party_form';
import Party from './components/party';

import logo from './logo.svg';
import './App.css';


const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/test">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
);



const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path = "/" component={Login}/>
        <Route path = "/home" component={Home}/>
        <Route path = "/settings" component={Settings}/>
        <Route path = "/party_form" component={Party_form} />
        <Route path = "/register" component = {Register} />
      </Router>
    );
  }
};

export default App;