function sort_by_distance (party_list){
	var sorted_list = party_list.map(function(party){
		var request = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=".concat(client.adress).concat("&destinations=").concat(party.adress).concat("&key=YOUR_API_KEY");
		var party.distance = axios.get(request).then(function(response){
			return(response.distance)
		});

	}).sort(function(a, b){return a.distance.value - b.distance.value});
	return sorted_list;
};

function remaining_place(party_list){
	return party_list.filter(party => party.remaining_places > 0);
}

function disconnect() {
	
}

function notify () {
	
}

function same_password () {
	var password_inputs = document.getElementsByTagName("Input").filter(element => element.type == password);
	return password_inputs[0].value == password_inputs[1].value;
}

function creerSoiree(date_soiree, description, id_bde, id_soiree, lieu,nb_place, tarif,tel) {
  Firebase.database().ref('soiree/' ).set({
    date_soiree: date,
    description: description,
    lieu : lieu,
    nb_place : nb_place,
    tarif : tarif,
    tel : tel

  });
};

function writeUserData(id_etudiant, mail, mdp, nom, prenom,tel) {
  Firebase.database().ref('compte_etudiant/' ).set({
    mail: mail,
    mdp: mdp,
    nom : nom,
    prenom : prenom,
    tel : tel

  });
};

function getParties(){
var soiree_id = firebase.auth().currentUser.uid;
return firebase.database().ref('soiree/' + soiree_id).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username);
  
});}


function check_date (date) {
	return date 
}