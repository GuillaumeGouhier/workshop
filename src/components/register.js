import React, {Component} from 'react';
import Input from './Input';

class Register extends Component{
	render() {
		return(
			<div>
				<form>
					<Input type ="text" name="name" placeholder = "Nom"></Input>
					<Input type = "text" name = "firstname" placeholder = "Prénom"></Input>
					<Input type = "password" name="password" placeholder="Mot de Passe"></Input>
					<Input type = "password" name = "confirm password" placeholder="Confirmer le mot de passe"></Input>
					<Input type = "mail" name = "mail" placeholder = "Email"></Input>
					<Input type = "number" name = "phone_number" placeholder = "Téléphone" max = "0999999999"></Input>
					<Input type = ""
				</form>
			</div>
		);
	}
};

export default Register;