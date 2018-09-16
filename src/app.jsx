import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/main.scss');
//or
//require('../css/main.css')

import {Bandit} from './components/bandit/bandit.jsx';
import {Last} from './components/last_5/Last.jsx';
import {Vs} from './components/vs/vs.jsx';

class App extends React.Component {
   constructor(props){
     super(props);
    this.state = {
        last5:false,
        vs: false,
        teamFirst: '',
        teamSecond: ''
    }
   }
    takeLastPropFromChild = (dataLast, dataVs, teamFirst, teamSecond) => {
       this.setState({
           last5: dataLast,
           vs: dataVs,
           teamFirst: teamFirst,
           teamSecond: teamSecond,
       })
    }
   render() {
     return (<div>
     <Bandit callbackLast = {this.takeLastPropFromChild} />
       {this.state.last5 === true ? <Last teamFirst = {this.state.teamFirst.value}
                                          teamSecond = {this.state.teamSecond.value} /> : null}

             {this.state.vs === true ? <Vs /> : null}
         </div>
     )
   }
 }

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
