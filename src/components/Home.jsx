import React from 'react';

function Home() {
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
    borderRadius: '10px'
  }
  const imageStyles = {
    width: '100%',
    height: '100%'
  };

  return(
    <div style={homeContainer}>
      <div style={dudeContainer}>
        <img style={imageStyles} src='https://vignette.wikia.nocookie.net/gremlins/images/f/f2/Gizmo.png/revision/latest?cb=20171206163200' />
        </div>
    </div>
  )
}

export default Home;
