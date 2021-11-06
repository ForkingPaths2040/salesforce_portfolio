import React from 'react';

function Hero(props) {
  return (
    <div className='hero-container'>
      <div className="flex fdrc jcc aic" style={{paddingTop:"10%"}}>
        <div className='monty' style={{ fontWeight:'600', fontSize:'2.5vh'}}>The Agenda</div>
        <div className='monty hero-title'><h1 style={{margin:'18px auto', textAlign:'center'}}>Be A Top Contributor</h1></div>
        <div className='lato hero-text' style={{ textAlign: 'center', fontSize: '3.5vh' }}>I have a passion for solving problems ‘inside-the-box’ as there are limitations from the client, a project or an organization. My ability to adapt and serve my own expectations provides a seamless addition to any project or organization.</div>
        <div className='flex fdrr call-to-action'>
          <button className='act-button lato'>Projects</button>
          <a style={{display:'contents'}}href="https://drive.google.com/file/d/1SdehA4vbdKgCjxebkMyIrfhH6Lf1yW5J/view?usp=sharing" target="blank"><button className='button-1 lato'>Resume</button></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;