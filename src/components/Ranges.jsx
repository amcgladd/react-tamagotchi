import React from 'react';
import FeedProgressBar from './FeedProgressBar';
import SleepProgressBar from './SleepProgressBar';
import PlayProgressBar from './PlayProgressBar';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';

function Ranges({ tamagotchi, helpButtonClicked, snackButtonClicked }){
  const rangeContainer = {
    margin: '5% 0px'
  }
  const rangeButtonStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px 0px',
    alignItems: 'center',
  }
  const snackButtonStyles = {
    backgroundColor: '#4C6085',
    color: 'white',
    marginRight: '1em',
    borderRadius: '10px',
    padding: '10px',
    width: '80px',
    display: 'flex',
    justifyContent: 'center'
  }

  return(
    <div style={rangeContainer}>
      <div style={rangeButtonStyles}>
        <FeedButton helpButtonClicked={helpButtonClicked}/>
        <FeedProgressBar percentage={tamagotchi.feedNeed} />
      </div>
      <div style={rangeButtonStyles}>
        <PlayButton helpButtonClicked={helpButtonClicked}/>
        <PlayProgressBar percentage={tamagotchi.playNeed} />
      </div>
      <div style={rangeButtonStyles}>
        <SleepButton helpButtonClicked={helpButtonClicked}/>
        <SleepProgressBar percentage={tamagotchi.sleepNeed} />
      </div>
      <div style={rangeButtonStyles}>
        <button style={snackButtonStyles} onClick={() => { snackButtonClicked()}}>Midnight Snack</button>
      </div>
    </div>
  );
}

export default Ranges;
