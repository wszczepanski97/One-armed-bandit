import React from "react";
import last from '../last_5/last.json';
import "./vs.css";

export class Vs extends React.Component {


    componentDidMount(){
        const VsTeam = last.teams;
        const VsTeams = VsTeam.map(el => Object.keys(el).toString());
        console.log(VsTeams);
        for (let i = 0; i < VsTeams.length; i++) {
            if (this.props.teamFirst === VsTeams[i]) {
                let y = Object.values(VsTeams[i]);
                console.log(y);

                    }};
    }



    render() {
        return <h1>XXX</h1>

}
}