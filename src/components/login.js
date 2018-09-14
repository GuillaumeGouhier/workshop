import React, {Component} from 'react';
import Input from './Input';
import { Router, browserHistory, Route, Link } from 'react-router';
import Axios from 'axios';

class Login extends Component {
	render () {
		return(
			<div>
				<form method="post" action="#">
					<Input type="mail" name="usermail"></Input>
					<Input type="password" name="userpassword"></Input>
					<Input type="submit" placeholder = "Valider" ></Input>
		</form>
		<Link to="/register">S'enregistrer</Link>
		</div>
	)}
};

export default Login;