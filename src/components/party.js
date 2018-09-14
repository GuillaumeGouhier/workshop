import React, {Component} from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import Axios from 'axios';

class Party extends Component{
	render(props) {
		return(
		<div id={this.props.name} classname = "party">
			
			<h1>{this.props.name}</h1>
			<p>{this.props.date}</p>
			<p>{this.props.price}</p>
			<p>{this.props.description}</p>
			<p>{this.props.contact}</p>
			<Link to="/participe">Participer</Link>
		</div>)
	}
}

export default Party;