import React from 'react';

function PlayButton({ helpButtonClicked }) {
  return(
    <button onClick={() => { helpButtonClicked('playNeed')}}>Play with me!!!</button>
  );
}

export default PlayButton;
