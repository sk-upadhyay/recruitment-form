import React from 'react';
import Lottie from 'lottie-react';
import robo from '../Animation - Robo.json';
import phone from '../Animation - 1707458635784.json';

function Animation() {
  return (
    <div className="container mx-auto px-4 py-4">
      <Lottie animationData={phone} loop={true} style={{ width: '100%', height: 'auto' }} />
      <Lottie animationData={robo} loop={true} style={{ width: '100%', height: 'auto' }} />
      
    </div>
  );
}

export default Animation;
