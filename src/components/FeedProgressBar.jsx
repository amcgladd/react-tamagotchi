import React from 'react';
import FeedFiller from './FeedFiller';

function FeedProgressBar({ percentage }) {
  const progressBarStyles = {
    height: '20px',
    width: '350px',
    borderRadius: '50px',
    border: 'black solid 1px'
  }
  return(
    <div style={progressBarStyles}>
      <FeedFiller percentage={percentage}/>
    </div>
  );
}

export default FeedProgressBar;
