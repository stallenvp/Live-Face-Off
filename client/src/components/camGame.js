import React, { Component } from 'react';
import TokBox from './openTok';
import '../assets/css/camGame.css';
import Chat from './chat';
import CamGameWinModal from './camGameWinModal';
import GameInfoModal from './gameInfoModal';

class CamGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayModal: false,
            displayInfoModal: false,
            teamOneScore: 0,
            teamTwoScore: 0,
            winningTeam: ''
        }

        this.roomKeyId = sessionStorage.getItem('roomKey');
        this.displayInfo = this.displayInfo.bind(this);
        this.closeInfoModal = this.closeInfoModal.bind(this);
        this.displayWinner = this.displayWinner.bind(this);
        this.closeWinModal = this.closeWinModal.bind(this);
        this.handleScoreInput = this.handleScoreInput.bind(this);
    }

    handleScoreInput(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    displayWinner() {
        const { teamOneScore, teamTwoScore } = this.state;
        let msg = (teamOneScore === teamTwoScore) ? 'Tie game!' : (teamOneScore > teamTwoScore) ? 'Team 1 wins!' : 'Team 2 wins!';

        this.setState({
            displayModal: true,
            winningTeam: msg
        })
    }

    displayInfo() {
        this.setState({
            displayInfoModal: true,
        })
    }

    closeInfoModal() {
        this.setState({
            displayInfoModal: false,
        })
    }

    closeWinModal() {
        this.setState({
            displayModal: false,
            winningTeam: '',
            teamOneScore: 0,
            teamTwoScore: 0,
        })
    }

    render() {
        const { displayModal, displayInfoModal, teamOneScore, teamTwoScore, winningTeam } = this.state;

        return (
            <div className="webpage row s12">
                <div className="col s3 score">
                    <div className="center-align" >
                        <div className="row">
                            <div className="col s6">
                                <h5>Team 1</h5>
                                <input id='teamOneScore' onChange={this.handleScoreInput} name='teamOneScore' value={teamOneScore} className="score" type="number" placeholder="Enter Score" />
                            </div>
                            <div className="col s6">
                                <h5>Team 2</h5>
                                <input id='teamTwoScore' onChange={this.handleScoreInput} name='teamTwoScore' value={teamTwoScore} className="score" type="number" placeholder="Enter Score" />
                            </div>
                        </div>
                    </div>
                    <div className="center-align">
                        <button onClick={this.displayInfo} className='btn blue-grey darken-2 camGameBtn waves-effect waves-light'>Info</button>
                        <button onClick={this.displayWinner} className='btn blue-grey darken-2 camGameBtn waves-effect waves-light' style={{marginLeft: '8px'}}>Display Winner</button>
                    </div>
                    <div className="col s12 chatCam">
                        <Chat />
                    </div>
                </div>
                <div className="col s9">
                    <TokBox />
                </div>
                <GameInfoModal display={displayInfoModal} close={this.closeInfoModal} gameType='webcam' roomKey={this.roomKeyId} />
                <CamGameWinModal display={displayModal} close={this.closeWinModal} gameResult={winningTeam} teamOneScore={teamOneScore} teamTwoScore={teamTwoScore} />
            </div>
        )
    }
}

export default CamGame;
