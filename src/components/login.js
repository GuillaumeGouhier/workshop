import React, {Component} from 'react';
import Input from './Input';
import { Router, browserHistory, Route, Link } from 'react-router';

class Login extends Component {
	render () {
		return(
			<div>
		<form>
			<Input type="mail" name="usermail"></Input>
			<Input type="password" name="userpassword"></Input>
			<button> Valider </button>
		</form>
		<Link to="/register">Register</Link>
		</div>
	)}
};

export default Login;