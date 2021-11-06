import React from 'react';
import Hero from '../components/Hero'

function Home(props) {
  return (
    <div>
      <Hero />
      <div style={{textAlign:'end', paddingRight:'10px', fontSize:'10px'}}>
          <p>Photo provided by <a href='https://www.instagram.com/georginatheweiner/'><b>Georgie Cobbs</b></a> via <a href='https://unsplash.com/@georgie_cobbs'><b>Unsplash</b></a></p>
      </div>
    </div>
  );
}

export default Home;