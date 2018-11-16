import React from 'react';
import Home from './home';
import RestartButton from './RestartButton';
import Ranges from './Ranges';

const tamagotchi = [
  {
    feedNeed: 100,
    sleepNeed: 100,
    playNeed: 100,
    isAlive: true,
    isEvil: false
  }
];
const bodyContainer = {

};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tamagotchi
    };
    this.helpButtonClicked = this.helpButtonClicked.bind(this);
    this.deathbyNeed = this.deathByNeed.bind(this);
    this.snackButtonClicked = this.snackButtonClicked.bind(this);
  }

  snackButtonClicked(){
    let newTamagotchiArray = this.state.tamagotchi.slice();
    let newTamagotchi = Object.assign({}, newTamagotchiArray[0]);
    newTamagotchi.isEvil = true;
    newTamagotchiArray[0] = newTamagotchi;
    this.setState({
      tamagotchi: newTamagotchiArray
    });
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
      });
    }
  }

  componentDidMount() {
    this.increaseTamaNeed = setInterval(() =>
      this.getNeedierOverTime(),
    1000);
  }

  deathByNeed(){
    let newTamagotchiArray = this.state.tamagotchi.slice();
    let newTamagotchi = Object.assign({}, newTamagotchiArray[0]);
    newTamagotchi.isAlive = false;
    newTamagotchiArray[0] = newTamagotchi;
    this.setState({
      tamagotchi: newTamagotchiArray
    });
  }

  handleTimer() {
    setTimeout(() => {
      this.deathByNeed();
    },
    3000
    );
  }

  getNeedierOverTime() {
    let newTamagotchiArray = this.state.tamagotchi.slice();
    let newTamagotchi = Object.assign({}, newTamagotchiArray[0]);
    let needFood = newTamagotchi.feedNeed - 3;
    let needSleep = newTamagotchi.sleepNeed - 2;
    let needPlay = newTamagotchi.playNeed - 1;
    newTamagotchi.feedNeed = needFood;
    newTamagotchi.sleepNeed = needSleep;
    newTamagotchi.playNeed = needPlay;
    newTamagotchiArray[0] = newTamagotchi;
    this.setState({
      tamagotchi: newTamagotchiArray
    });
    if (needFood <= -10 || needPlay <= -10 || needSleep <= -10) {
      clearInterval(this.increaseTamaNeed);
      this.handleTimer();
    }
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.tamagotchi[0].isAlive === true){
      currentlyVisibleContent = <div><Ranges tamagotchi={this.state.tamagotchi[0]} helpButtonClicked={this.helpButtonClicked} snackButtonClicked={this.snackButtonClicked}/></div>;
    } else {
      currentlyVisibleContent = <RestartButton tamagotchi={this.props.tamagotchi}/>;}

    return (
      <div style={bodyContainer}>
        <Home tamagotchi={this.state.tamagotchi[0]} />
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default App;
