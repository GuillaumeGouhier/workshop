import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"

class login extends Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems,null);
        });
    }
    render(){
        return(
            <div className="valign-wrapper row login-box">
                <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form>
                        <div className="card-content">
                            <span className="card-title">Recherche</span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label htmlFor="date">Date de participation</label>
                                    <input type="text" className="datepicker"/>
                                </div>
                                <div className="input-field col s12">
                                    <label htmlFor="text">Adresse</label>
                                    <input type="text" className="text" name="text" id="text"/>
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