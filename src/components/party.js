import React, {Component} from 'react';

class Party extends Component{
	render(props) {
		return(
		<div id={this.props.name} classname = "party">
			
			<h1>{this.props.name}</h1>
			<p>{this.props.date}</p>
			<p>{this.props.price}</p>
			<p>{this.props.description}</p>
			<p>{this.props.contact}</p>
		</div>)
	}
}

export default Party;