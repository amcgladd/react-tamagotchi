import React from 'react';
import PlayFiller from './PlayFiller';

function PlayProgressBar({ percentage }) {
  const progressBarStyles = {
    height: '22px',
    width: '425px',
    borderRadius: '50px',
    backgroundColor: 'white'
  }
  return(
    <div style={progressBarStyles}>
      <PlayFiller percentage={percentage}/>
    </div>
  );
}

export default PlayProgressBar;
