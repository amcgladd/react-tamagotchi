import React from 'react';

function RestartButton(){
  const innerRestartButton = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '30px'
  }
  const perishedTextStyles = {
    position: 'absolute',
    left: 'auto',
    right: 'auto',
    color: '#E3655B',
    bottom: '200px',
    fontSize: '6em',
    transform: 'rotate(-38deg)',
    fontFamily: 'Permanent Marker'
  }
  const restartButtonStyles = {
    backgroundColor: '#E3655B',
    color: 'white',
    marginRight: '1em',
    borderRadius: '10px',
    padding: '10px',
    width: '80px',
    display: 'flex',
    justifyContent: 'center'
  }

  function newGame(event){
    event.preventDefault()
    location.reload()
  };

  return(
    <div style={innerRestartButton}>
      <i style={restartButtonStyles} onClick={newGame} className="fas fa-redo-alt fa-3x"></i>
      <h1 style={perishedTextStyles}>Whoops! DEAD!</h1>
    </div>
  );
}


export default RestartButton;
