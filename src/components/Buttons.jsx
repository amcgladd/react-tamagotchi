import React from 'react';
import FeedButton from './FeedButton';
import SleepButton from './SleepButton';
import PlayButton from './PlayButton';

function Buttons({ helpButtonClicked }) {
  return(
    <div>
      <FeedButton helpButtonClicked={helpButtonClicked}/>
      <SleepButton helpButtonClicked={helpButtonClicked}/>
      <PlayButton helpButtonClicked={helpButtonClicked}/>
    </div>

  );
}

export default Buttons;
