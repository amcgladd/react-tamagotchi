import React from 'react';
import FeedButton from './FeedButton';

function Buttons({ helpButtonClicked }) {
  return(
    <div>
      <FeedButton helpButtonClicked={helpButtonClicked}/>
    </div>

  );
}

export default Buttons;
