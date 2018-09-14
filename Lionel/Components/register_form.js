import React, { Component } from "react";
import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"


class register_form extends Component{
    render(){
        return(
            <div className="valign-wrapper row login-box">
                <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form>
                        <div className="card-content">
                            <span className="card-title">Entrer vos identifiants</span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="nom" type="text" className="validate"/>
                                    <label htmlFor="nom">Nom</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="Prénom" type="text" className="validate"/>
                                    <label htmlFor="Prénom">Prénom</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate"/>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="number" type="text" className="validate"/>
                                    <label htmlFor="number">Numéro</label>
                                </div>
                                <button className="btn waves-effect waves-light" type="submit"
                                        name="action">valider
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default register_form;
