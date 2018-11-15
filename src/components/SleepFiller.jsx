import React from 'react';

function SleepFiller({ percentage }) {
  const fillerStyles = {
    background: 'black',
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width 1s ease-in',
    width: `${percentage}%`
  }
  return(
    <div style={fillerStyles}>
    </div>
  );
}

export default SleepFiller;
