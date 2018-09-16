import React from "react";
import last from './last';
import './last.css';
export class Last extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LastMatchesOne: ' ',
            LastMatchesTwo: ' ',
            resultOne: 0,
            resultTwo: 0,
        }
    }

    componentDidMount() {
        const arrayTeam = last.teams;
        console.log(arrayTeam[0].team0[0].teamName);
        console.log(Object.keys(arrayTeam[0]));
        const arrayTeams = arrayTeam.map(el => Object.keys(el).toString());
        console.log(arrayTeams);
        for (let i = 0; i < arrayTeams.length; i++) {
            if (this.props.teamFirst === arrayTeams[i]) {
                let x = Object.values(arrayTeam[i]);
                console.log(x);
                let result = 0;
                x[0][2].last5.map( el => {
                    if(el.charAt(0) ==="W"){
                        result += 3;
                    } else if(el.charAt(0) === "D"){
                        result += 1;
                    } else {
                        result += 0;
                    }});
                this.setState({
                    LastMatchesOne: x[0][2].last5.map((el, index) => <h3 key = {index}>{el}</h3>),
                    TeamOneName: x[0][0].teamID,
                    resultOne: result
                })

            }
            if (this.props.teamSecond === arrayTeams[i]) {
                let y = Object.values(arrayTeam[i]);
                console.log(y);
                let result = 0;
                y[0][2].last5.map( el => {
                if(el.charAt(0) ==="W"){
                    result += 3;
                } else if(el.charAt(0) === "D"){
                    result += 1;
                } else {
                    result += 0;
                }});
                this.setState({
                    LastMatchesTwo: y[0][2].last5.map((el, index) => <h3 key = {index}>{el}</h3>),
                    TeamSecondName: y[0][0].teamID,
                    resultTwo: result
                })
            }
        }
        }

    render() {
        return(
            <div className="last5">
        <div className="scoreboard">
            <div className="team">
                <h1>{this.state.TeamOneName}</h1>
                <div>{this.state.LastMatchesOne}</div>
                <h2> Punkty: {this.state.resultOne}</h2>
            </div>
            <div className="team">
                <h1>{this.state.TeamSecondName}</h1>
                <div>{this.state.LastMatchesTwo}</div>
                <h2> Punkty: {this.state.resultTwo}</h2>
            </div>
            </div>
                <h2>
                    {this.state.resultOne > this.state.resultTwo ? "Wygrywa " + this.state.TeamOneName : null}
                    {this.state.resultOne < this.state.resultTwo ? "Wygrywa " + this.state.TeamSecondName : null}
                    {this.state.resultOne == this.state.resultTwo ? "Mamy remis" : null}
                </h2>
            </div>
        )
    }
}