import React from "react";
import last from '../last_5/last.json';
import "./vs.css";

export class Vs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           results: [],
            firstTeam: '',
            secondTeam: ''
        }
    }
    componentDidMount() {
        const VsTeam = last.teams;
        const VsTeams = VsTeam.map(el => Object.keys(el).toString());
        console.log(VsTeams);
        for (let i = 0; i < VsTeams.length; i++) {
            if (this.props.teamFirst === VsTeams[i]) {
                let TeamTwoInfo = [];
                let x = Object.values(VsTeam[i]);
                const teamTwoName = x[0][3].vs.map(el => Object.keys(el).toString());
                this.setState({
                    firstTeam: x[0][0].teamID
                })
                console.log(Object.values(x[0][3].vs[i]));
                for(let j =0; j < teamTwoName.length; j++){
                    if(teamTwoName[j] === this.props.teamSecond){
                        TeamTwoInfo = Object.values(x[0][3].vs[j]);
                        let y = Object.values(VsTeam[j]);
                        this.setState({
                            results: TeamTwoInfo[0][0].map((el, index) => <h3 key ={index}>{el}</h3>),
                            secondTeam: y[0][0].teamID
                        })
                    }
                }
                }

            }
        };


    render() {
        return <div>
            <h1>{this.state.firstTeam}</h1>
            {this.state.results}
            <h1>{this.state.secondTeam}</h1>
            </div>

}
}