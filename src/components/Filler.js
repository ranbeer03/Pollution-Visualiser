import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Filler.css';

function Filler() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='DescriptionContainer'>
        <h1 className='Heading'>ADVENTURE AWAITS</h1>
        <p className='Description'>So what are you waiting for? Start exploring the data today, and see for yourself how air pollution is affecting your city. With Pollution Visualiser, you can be part of the solution to this urgent environmental and public health challenge.</p>
      </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          type='button'
          onClick={scrollToTop}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          type='button'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Filler;