import React, {Component} from 'react';
import Searchform from './searchform';
import Party from './party';

class Home extends Component{
	render(){
		return(
			<div>
			<Party name="test" date ="11/09" price="10" description= "ceci n'est qu'un test" contact="011111"></Party>
			
			<Searchform></Searchform>
			</div>
	)}
};

export default Home;