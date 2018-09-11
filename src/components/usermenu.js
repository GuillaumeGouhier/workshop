import React, {Component} from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';

class UserMenu extends Component {
	render(){
		return (
			<div id="UserMenu">
				<ul>
					<li><Link to="/account_settings" />Mon Compte</li>
					<li><Link to="/disconnect" />Déconnexion</li>
				</ul>
			</div>
		);
	}
};