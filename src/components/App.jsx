import React from 'react';
import Home from './home';
import Buttons from './buttons';
import RestartButton from './RestartButton';
import Ranges from './Ranges';

const tamagotchi = [
  {
     feedNeed: 100,
     sleepNeed: 100,
     playNeed: 100,
     isAlive: true
   }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tamagotchi
    }
    this.helpButtonClicked = this.helpButtonClicked.bind(this);
    }

  helpButtonClicked(need) {
    if (this.state.tamagotchi[0][need] <=90) {
      let newTamagotchiArray = this.state.tamagotchi.slice();
      let newTamagotchi = Object.assign({}, newTamagotchiArray[0]);
      let newFulfilledNeed = newTamagotchi[need] + 10;
      newTamagotchi[need] = newFulfilledNeed;
      newTamagotchiArray[0] = newTamagotchi;
      this.setState({
        tamagotchi: newTamagotchiArray
      }, () => {
        console.log(this.state.tamagotchi[0]);
      });
    }
  }

  componentDidMount() {
    this.increaseTamaNeed = setInterval(() =>
      this.getNeedierOverTime(),
    5000);
  }

  deathByNeed(){
    clearInterval(this.increaseTamaNeed);
    let newTamagotchiArray = this.state.tamagotchi.slice();
    let newTamagotchi = Object.assign({}, newTamagotchiArray[0]);
    newTamagotchi.isAlive = false;
    newTamagotchiArray[0] = newTamagotchi;
    this.setState({
      tamagotchi: newTamagotchiArray
    }, () => {
      console.log(this.state.tamagotchi[0]);
    });
  }

  getNeedierOverTime() {
    let newTamagotchiArray = this.state.tamagotchi.slice();
    let newTamagotchi = Object.assign({}, newTamagotchiArray[0]);
    let needFood = newTamagotchi.feedNeed - 20;
    let needSleep = newTamagotchi.sleepNeed - 10;
    let needPlay = newTamagotchi.playNeed - 15;
    newTamagotchi.feedNeed = needFood;
    newTamagotchi.sleepNeed = needSleep;
    newTamagotchi.playNeed = needPlay;
    newTamagotchiArray[0] = newTamagotchi;
    this.setState({
      tamagotchi: newTamagotchiArray
    }, () => {
      console.log(this.state.tamagotchi[0]);
    });
    if (needFood <= 0 || needPlay <= 0 || needSleep <= 0) {
      this.deathByNeed();
    }
  };

  render() {
    let currentlyVisibleContent = null;
    if (this.state.tamagotchi[0].isAlive === true){
      currentlyVisibleContent = <div><Buttons helpButtonClicked={this.helpButtonClicked}/><Ranges tamagotchi={this.state.tamagotchi[0]}/></div>;
    } else {
      currentlyVisibleContent = <RestartButton tamagotchi={this.props.tamagotchi}/>;}

  return (
    <div>
      <Home tamagotchi={this.props.tamagotchi} />
      {currentlyVisibleContent}
    </div>
  );
}
}

export default App;
