import React, { Component } from "react";
import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min";

class party_form extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, null);
        });
    }
    render() {
        return (
            <div className="valign-wrapper row login-box">
                <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form>
                        <div className="card-content">
                            <span className="card-title">Ajouter votre annonce ici </span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label htmlFor="date">Date de l'évènement</label>
                                    <input  type="text" className="datepicker"/>
                                </div>
                                <div className="input-field col s12">
                                    <label htmlFor="text">Adresse</label>
                                    <input  type="text" className="text" name="text" id="text"/>
                                </div>
                                <div className="input-field col s12">
                                    <label htmlFor="text">Tarif de l'évènement</label>
                                    <input  type="text" className="text" name="text" id="text"/>
                                </div>
                                <div className="input-field col s6">
                                    <input  id="first_name" type="text"/>
                                    <label htmlFor="first_name">Nom de l'organisateur</label>
                                </div>
                                <div className="input-field col s6">
                                    <input  id="last_name" type="text"/>
                                    <label htmlFor="last_name">Prénom</label>
                                </div>
                                <div className="input-field col s6">
                                    <input  id="phone" type="text"/>
                                    <label htmlFor="phone">téléphone de contact</label>
                                </div>
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label htmlFor="textarea1">Description de l'annonce</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit"
                                    name="action">valider
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
export default party_form;