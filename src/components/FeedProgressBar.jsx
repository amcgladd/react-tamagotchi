import React from 'react';
import FeedFiller from './FeedFiller';

function FeedProgressBar({ percentage }) {
  const progressBarStyles = {
    height: '22px',
    width: '425px',
    borderRadius: '50px',
    backgroundColor: 'white'
  };
  return(
    <div style={progressBarStyles}>
      <FeedFiller percentage={percentage}/>
    </div>
  );
}

export default FeedProgressBar;
