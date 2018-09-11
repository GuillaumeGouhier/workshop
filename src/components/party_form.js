import React, {Component} from 'react';

class Party_form extends Component {
	render () {
		return(
		<Form id="party_form">
			<Input type = "radio" name="driver" value="True">
			<Input type = "radio" name="driver" value = "False">
			<Input type="submit" value="valider">
		</Form>
	)}
};

export default Party_form;