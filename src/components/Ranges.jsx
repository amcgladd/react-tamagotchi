import React from 'react';
import FeedProgressBar from './FeedProgressBar';
import SleepProgressBar from './SleepProgressBar';
import PlayProgressBar from './PlayProgressBar';

function Ranges({ tamagotchi }){
  return(
    <div>
      <div>
        <h3>Energy: </h3><FeedProgressBar percentage={tamagotchi.feedNeed} />
      </div>
      <div>
        <h3>Awareness: </h3><SleepProgressBar percentage={tamagotchi.sleepNeed} />
      </div>
      <div>
        <h3>Happiness: </h3><PlayProgressBar percentage={tamagotchi.playNeed} />
      </div>
    </div>
  );
}

export default Ranges;
