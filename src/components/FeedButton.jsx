import React from 'react';

function FeedButton({ helpButtonClicked }) {
  const statColorButtonStyle = {
    backgroundColor: '#596157',
    color: 'white',
    marginRight: '1em',
    borderRadius: '10px',
    padding: '10px',
    width: '80px',
    display: 'flex',
    justifyContent: 'center'
  }
  return(
    <i style={statColorButtonStyle} onClick={() => { helpButtonClicked('feedNeed')}} className="fas fa-utensils fa-3x"></i>
  );
}

export default FeedButton;
