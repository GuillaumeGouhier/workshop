import React, {Component} from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';

class Participe extends Component {
	render() {
		<div>
			<form>
				<Input type="radio" value= "Oui" onClick=function(){
					var driver_adress = document.getElementById('driver_adress');
					driver_adress.visibility = "true";
				}
				/>
				<Input type = "radio" value= "Non" />
				<Input type="text" name="driver_"
			</form>
		</div>
	}
}