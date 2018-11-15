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
        <img style={imageStyles} src='https://png2.kisspng.com/sh/71403c30503e160f8f9779f8dd1f7215/L0KzQYm3VsE3N6Rwj5H0aYP2gLBuTfdzbZ5xgdC2Ynn1hLnrggkuPZM3TdYEZUezRITpVMEvPWE6S6IEOEK0RYOCUsA4Omg2SKMCND7zfri=/kisspng-gremlin-birthday-5b25d9e7043b41.5053098215292072710174.png' />
        </div>
    </div>
  )
}

export default Home;
