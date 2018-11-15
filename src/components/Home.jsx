import React from 'react';
import gizmo from '../assets/images/gizmo.png';
import gremlin from '../assets/images/gremlin.png';

function Home({ tamagotchi }) {
  const homeContainer = {
    display: 'flex',
    height: '100%',
    marginTop: '12%',
  }
  const dudeContainer = {
    backgroundColor: '#52414C',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    borderRadius: '10px',
    height: '550px'
  }
  const imageStyles = {
    width: 'auto',
    height: '400px',
    margin: '30px 10px',

  };


  if (tamagotchi.isEvil === false) {

    return(
      <div style={homeContainer}>
        <style jsx>{`
          img {
            animation: bounce 0.5s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            }
          @keyframes bounce {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(0, 50px, 0); }
          }
        `}</style>
        <div style={dudeContainer}>
          <img style={imageStyles} src={gizmo} />
          </div>
      </div>
    )
  } else {
    return(
      <div style={homeContainer}>
        <style jsx>{`
          img {
            animation: bounce 0.5s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            }
          @keyframes bounce {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(0, 50px, 0); }
          }
        `}</style>
        <div style={dudeContainer}>
          <img style={imageStyles} src={gremlin} />
          </div>
      </div>
    )
  }
}

export default Home;
