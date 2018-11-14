import React from 'react';
import FeedNeed from './FeedNeed';

function Ranges({ tamagotchi }){
  console.log(tamagotchi);
  return(
    <FeedNeed tamagotchi={tamagotchi}/>
  );
}

export default Ranges;
