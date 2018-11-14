import React from 'react';

function FeedButton({ helpButtonClicked }) {
  return(
    <button onClick={() => { helpButtonClicked('feedNeed')}}>Feed Me!!!</button>
  );
}

export default FeedButton;
