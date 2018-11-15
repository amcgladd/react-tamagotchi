import React from 'react';

function PlayButton({ helpButtonClicked }) {
  const statColorButtonStyle = {
    backgroundColor: '#E3655B',
    color: 'white',
    marginRight: '1em',
    borderRadius: '10px',
    padding: '10px',
    width: '80px',
    display: 'flex',
    justifyContent: 'center'
  }
  return(
    <i style={statColorButtonStyle} onClick={() => { helpButtonClicked('playNeed')}} className="fas fa-basketball-ball fa-3x"></i>
  );
}

export default PlayButton;
