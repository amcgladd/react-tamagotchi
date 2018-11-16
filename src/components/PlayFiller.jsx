import React from 'react';

function PlayFiller({ percentage }) {
  const fillerStyles = {
    background: '#E3655B',
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

export default PlayFiller;
