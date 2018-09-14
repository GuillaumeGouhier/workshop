import React, {Component} from 'react';
import Searchform from './searchform';
import Party from './party';
import Axios from 'axios';
import Firebase from 'firebase';
var client ={
	name: 'test',
	position: 'epsi paris'
}
var config = {
  apiKey: "AIzaSyCJQePaeOPnM2KX-2bSsw89mRzkkDAdYYs",
  authDomain: "pwa-experiment-ff8c9.firebaseapp.com",
  databaseURL: "https://pwa-experiment-ff8c9.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};
Firebase.initializeApp(config);
var database = Firebase.database();

function creerSoiree(date_soiree, description, id_bde, id_soiree, lieu,nb_place, tarif,tel) {
  Firebase.database().ref('soiree/' ).set({
    date_soiree: date_soiree,
    description: description,
    lieu : lieu,
    nb_place : nb_place,
    tarif : tarif,
    tel : tel

  });
};

function showParty(){

	return Firebase.database().ref('soiree/').once('value').then(function(snapshot) {
  		console.log(snapshot.val());
  
});}
showParty();
creerSoiree("28/07/2019", "test", 1, 0, "epsi lille", 40, 10, "0699999999");

function sort_by_distance (party_list){
	var sorted_list = party_list.map(function(party){
		var request = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=".concat(client.adress).concat("&destinations=").concat(party.adress).concat("&key=YOUR_API_KEY");
		party.distance = Axios.get(request).then(function(response){
			return(response.distance)
		});

	}).sort(function(a, b){return a.distance.value - b.distance.value});
	return sorted_list;
};

class Home extends Component{
	render(){
		return(
			<div>
			//doRequest
			var parties = sort_by_distance(request_result);
			parties.forEach(function(party){

			})
			<Party name="test" date ="11/09" price="10" description= "ceci n'est qu'un test" contact="011111"></Party>
			<Searchform></Searchform>
			</div>
	)}
};

export default Home;