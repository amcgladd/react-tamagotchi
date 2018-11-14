import React from 'react';

function RestartButton(){

  function newGame(event){
    event.preventDefault()
    location.reload()
  };

  return(
    <button onClick={newGame}>Restart</button>
  );
}


export default RestartButton;
