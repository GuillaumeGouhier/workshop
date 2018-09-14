import React, { Component } from "react";
import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"

class login extends Component{
    render(){
        return(
            <div className="valign-wrapper row login-box">
                <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form>
                        <div className="card-content">
                            <span className="card-title">Entrer vos informations de connexion</span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label htmlFor="email">Addresse Email</label>
                                    <input type="email" className="validate" name="email" id="email"/>
                                </div>
                                <div className="input-field col s12">
                                    <label htmlFor="password">Mot de passe</label>
                                    <input type="password" className="validate" name="password" id="password"/>
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default login;