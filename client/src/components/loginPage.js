import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homePageStyle.css';
import axios from 'axios';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.getRequest = this.postRequest.bind(this);
    }
    postRequest() {
        axios.post('/users/login').then(resp => {
            console.log('Get Resp:', resp);
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='signInArea'>
                    <div className='row'>
                        <div className="col s12 homeTitle center-align">
                            <h1>Live Face Off</h1>
                        </div>
                    </div>
                    <div className="row">
                        <form className="col s12 center-align" action="/users/login" method="post">
                            <div className='inputFieldCentering'>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="text" className="validate" name="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" name="password" placeholder="Password" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className='buttonArea col s12'>
                                    <Link className='logInBtn waves-effect waves-light btn' to='/register'>Register</Link>
                                    <button onClick={this.postRequest} className='logInBtn waves-effect waves-light btn'>Log In</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className='buttonAreaTwo col s12 center-align'>
                                    <p className='center-align'>----------------------- or login with -----------------------</p>
                                    <a className="facebookBtn waves-effect waves-light btn light-blue darken-1" href="/auth/facebook">Facebook</a>
                                    <a className="googleBtn waves-effect waves-light btn deep-orange darken-1" href="/auth/google">Google</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;