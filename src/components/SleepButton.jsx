import React from 'react';

function SleepButton({ helpButtonClicked }) {
  const statColorButtonStyle = {
    backgroundColor: '#52414C',
    color: 'white',
    marginRight: '1em',
    borderRadius: '10px',
    padding: '10px',
    width: '80px',
    display: 'flex',
    justifyContent: 'center'
  }
  return(
    <i style={statColorButtonStyle} onClick={() => { helpButtonClicked('sleepNeed')}} className="fas fa-bed fa-3x"></i>
  );
}

export default SleepButton;
