import React from 'react';

function FeedFiller({ percentage }) {
  const fillerStyles = {
    background: '#596157',
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width 1s ease-in',
    width: `${percentage}%`
  };
  return(
    <div style={fillerStyles}>
    </div>
  );
}

export default FeedFiller;
