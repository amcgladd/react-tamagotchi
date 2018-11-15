import React from 'react';

function RestartButton(){

  function newGame(event){
    event.preventDefault()
    location.reload()
  };

  return(
    <div>
      <button onClick={newGame}>Restart</button>
      <h1>Your Pet has Perished</h1>
    </div>
  );
}


export default RestartButton;
