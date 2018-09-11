import React, {Component} from 'react';
import Input from './Input';

class Searchform extends Component {
	render(){
		return(
			<div id="searchform">
				<form>
					<Input type="date" name="participating_date" id="participating_date"></Input>
					<Input type="text" name="adresse" placeholder="Utiliser votre position actuelle" id="adresse"></Input>
					<button>Rechercher</button>
				</form>
			</div>
	)}
};

export default Searchform;