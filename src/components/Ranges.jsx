import React from 'react';

function Ranges({ tamagotchi }){
  return(
    <div>
      <h1>Feed Need: {tamagotchi.feedNeed}</h1>
      <h1>Sleep Need: {tamagotchi.sleepNeed}</h1>
      <h1>Play Need: {tamagotchi.playNeed}</h1>
    </div>
  );
}

export default Ranges;
