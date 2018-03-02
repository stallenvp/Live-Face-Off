import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/css/homePage.css';
import LandingBG from '../assets/images/gameBG3.png';
import fam from '../assets/images/itlitfam.png';
import homepage from '../assets/images/homepage.jpg'

var styles = {
    backgroundSize: 'cover',
    backroundRepeat: 'no-repeat',
    backgroundImage: 'url(' + LandingBG + ')'
};

class Homepage extends Component {
    render() {
        return (
            <div className='pageContainer' style={styles}>
                <div className='row'>
                    <div className='landing col s5'>
                        <div className='mainDiv'>
                            <h1 className="gameTitle home center center-align">Live Face Off </h1>
                        </div>
                    </div>
                    <div className='col s7'>
                        <div className='row'>
                            <div className="col s12">
                                <h3 className='title center center-align'>What is Live Face Off?</h3>
                                <p classname="center center-align">Want to reconnect with a family member overseas? Need a place to hangout with buddies after a long day of work? Live Face Off is a platform where you can easily spend some time with someone close and catch up. Our mission is to create an interface that can be used by just about anyone, while bringing together core technologies that allow for easy communication and fun.</p>
                            </div>
                        </div>
                        <div className='fam row'>
                            <div className="col s12">
                                <img id="fam" src={fam} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className='accountAccess center center-align'>
                                    <Link id='signUpAcc' className='btn brown darken-4 waves-effect waves-light btn-large' to='/register' style={{ marginTop: '23px' }}>Create a Free Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col s6 offset-s3'>
                            <h1 className="feature center center-align">Features</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col s3'>
                            <div className='row'>
                                <div className='col s12'>
                                    <h5 className='center center-align'>Friendly Login System</h5>
                                    <div className='divider black'></div>
                                    <p>Our login process is quick and easy, especially for grandma and grandpa! We've provided the ability to log in with Facebook and Google that way you can use an existing account. You may also choose to create an account with us in a few easy steps. </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col s12'>
                                    <h5 className='center center-align'>Easy Navigation</h5>
                                    <div className='divider black'></div>
                                    <p>Once you log in, you are welcomed into our lobby. You have the option of creating your own game and sharing your special key code with friends or family, or you have the option to join a room with a given key. There are no installations or downloads required to have with Live Face Off!</p>
                                </div>
                            </div>
                        </div>
                        <div className="imageContainer col s6">
                            <img src={homepage} className="gameImage col s12" />
                        </div>
                        <div className='col s3'>
                            <div className='row'>
                                <div className='col s12'>
                                    <h5 className='center center-align'>Variety of Games</h5>
                                    <div className='divider black'></div>
                                    <p>Choose from a our range of games or play a peer to peer game in our webchat game room. You have the option to customize scores and win conditions in each game room.</p>
                                    <p className="center center-align"><i> More Coming soon!</i></p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col s12'>
                                    <h5 className='center center-align'>Video, Voice, and Text Chat</h5>
                                    <div className='divider black'></div>
                                    <p>We enhanced the experience enabling you to communicate with your friends and family via video and voice. If you have a slower connection or don't have a web cam, we have you covered. You can always communicate just as easily with our integrated webchat!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;