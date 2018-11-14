import React from 'react';

function SleepButton({ helpButtonClicked }) {
  return(
    <button onClick={() => { helpButtonClicked('sleepNeed')}}>Go to Sleep!!!</button>
  );
}

export default SleepButton;
