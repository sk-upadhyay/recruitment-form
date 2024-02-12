import React from 'react'
import Lottie from "lottie-react";
import robo from '../Animation - Robo.json'
import phone from '../Animation - 1707458635784.json'

function Animation() {
  return (
    <div>
    <Lottie animationData={phone} loop={true} />
    <Lottie animationData={robo} loop={true} />
    </div>
  )
}

export default Animation
