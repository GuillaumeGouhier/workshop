import React, {Component} from 'react';
import Input from './Input';

class Party_form extends Component {
	render () {
		return(
			<div>
				<form id="party_form">
					<Input type = "radio" name="driver" value="True"></Input>
					<Input type = "radio" name="driver" value = "False"></Input>
					<Input type="submit" value="valider"></Input>
				</form>
			</div>
		)
	}
};

export default Party_form;