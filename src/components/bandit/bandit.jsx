import React from 'react';
import ReactDOM from 'react-dom';
import './bandit.css';
export class Bandit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vs: false,
            last5: false,
            value: false,
            teamFirst: '',
            teamSecond: '',
            disabled: true
        }
    }

    doSlot = (e) => {
        this.setState({
            disabled: true
        })
        if(this.state.disabled){
            e.target.disabled = this.state.disabled;
        }
        let slot1 = document.getElementById("slot1");
        let slot3 = document.getElementById("slot3");
        let arrayofClubs = [slot1, slot3];
        let status = document.getElementById("status");
        for (let i = 0; i < arrayofClubs.length; i++) {
            let saveSlot = 0;
            const slotchange = setInterval(() => {
                let changeSlot = Math.floor((Math.random() * 15));
                arrayofClubs[i].classList.remove("team" + String([saveSlot]));
                arrayofClubs[i].classList.add("team" + String([changeSlot]));
                arrayofClubs[i].dataset.id = changeSlot;
                saveSlot = changeSlot;
                status.innerHTML = "Gramy!";
            }, 50);
            setTimeout(() => {
                clearInterval(slotchange);
                status.innerHTML = "Jaki będzie wynik tego spotkania..?";
            }, 2000 * (i + 1));
        }

        let slot2 = document.getElementById("slot2");
        let arrayofVs = ["vs", "last 5", "value"];
        let saveVs = "";
        const vsChange = setInterval(() => {
            let changeVs = Math.floor((Math.random() * 3));
            slot2.innerHTML = " ";
            slot2.innerHTML = arrayofVs[changeVs];
        }, 50);
        setTimeout(() => {
            clearInterval(vsChange)
            if (slot2.innerHTML === arrayofVs[0]) {
                this.setState(
                    {
                        vs: true,
                        last5: false,
                        value: false,
                        teamFirst: arrayofClubs[0].classList,
                        teamSecond: arrayofClubs[1].classList
                    })
            };
            if (slot2.innerHTML === arrayofVs[1]) {
                this.setState(
                    {
                        vs: false,
                        last5: true,
                        value: false,
                        teamFirst: arrayofClubs[0].classList,
                        teamSecond: arrayofClubs[1].classList
                    })
            };
            if (slot2.innerHTML === arrayofVs[2]) {
                this.setState(
                    {
                        vs: false,
                        last5: false,
                        value: true,
                        teamFirst: arrayofClubs[0].classList,
                        teamSecond: arrayofClubs[1].classList
                    })
            };
                let button = document.getElementById("but");
                button.disabled = false;
                this.props.callbackLast(this.state.last5, this.state.vs, this.state.teamFirst, this.state.teamSecond);
            }
            , 5000);
    }
   render() {
     return (
         <div>
         <main>
             <section id="status">WELCOME!</section>
             <section id="Slots">
                 <div id="slot1" className="team1" data-id = ""></div>
                 <div id="slot2" className="rivalry">vs</div>
                 <div id="slot3" className="team2" data-id = ""></div>
             </section>
             <section id="Gira"><button id ="but" onClick={e => this.doSlot(e)}>TAKE A SPIN!</button></section>
             <section id="options">
             </section>
         </main>
         </div>
   )
   }
 }
