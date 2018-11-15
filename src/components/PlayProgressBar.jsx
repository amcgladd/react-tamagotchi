import React from 'react';
import PlayFiller from './PlayFiller';

function PlayProgressBar({ percentage }) {
  const progressBarStyles = {
    height: '20px',
    width: '350px',
    borderRadius: '50px',
    border: 'black solid 1px'
  }
  return(
    <div style={progressBarStyles}>
      <PlayFiller percentage={percentage}/>
    </div>
  );
}

export default PlayProgressBar;
