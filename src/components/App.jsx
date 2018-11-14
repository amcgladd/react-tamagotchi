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

  componentDidMount() {
    this.increaseTamaNeed = setInterval(() =>
      this.getNeedierOverTime(),
    500);
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
  }

  render() {
  return (
    <div>
      <Home tamagotchi={this.props.tamagotchi} />
      <Buttons helpButtonClicked={this.helpButtonClicked}/>
      <Ranges tamagotchi={this.state.tamagotchi[0]}/>
      <RestartButton tamagotchi={this.props.tamagotchi}/>
    </div>
  );
}
}

export default App;
