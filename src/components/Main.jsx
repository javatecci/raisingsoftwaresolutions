///import logo from './logo.svg';
import React from 'react'
import videoBg from '../assets/videoBg.mp4'


const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site. I am Jayanta</p>


        <p>
          If you Like this website You may Contact me .
        </p>
        <a href='https://javatecci.github.io/raisingsoftwaresolution/'
        >
          If you Like this website You may Contact me .
        </a>

        <a href='https://javatecci.github.io/client/'
        >
          If you Like this website You may Contact me .
        </a>

        </div>
    </div>
  )
}

export default Main