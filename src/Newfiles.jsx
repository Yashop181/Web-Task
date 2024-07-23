import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewFiles.css';
import { ImCross } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidepart from './Sidepart';

const videoHistory = [
  {
    day: 'Monday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is a very nice video.',
  },
  {
    day: 'Monday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This video provides an in.',
  },
  {
    day: 'Tuesday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is a very nice video.',
  },
  {
    day: 'Tuesday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This video provides an in.',
  },
  {
    day: 'Wednesday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This video provides an in.',
  },
  {
    day: 'Thursday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This video provides an in.',
  },
  {
    day: 'Friday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This video provides an in.',
  },
  {
    day: 'Saturday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This video provides an in.',
  },
  {
    day: 'Sunday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This video provides an in.',
  },
  // Add more video objects as needed
];

const Newfiles = () => {
  let lastDay = null;
  const reversedVideoHistory = [...videoHistory].reverse();
  return (
    <>
      <div className='all-together'>
        <div className='newfiles-container'>
          <div></div>
          <div className='row d-flex justify-content-center watch'>
            <div className='day'>
              <h1>Watch history</h1>
            </div>
            {reversedVideoHistory.map((video, index) => {
              const showDay = video.day !== lastDay;
              lastDay = video.day;
              return (
                <div key={index} className='col-md-8 my-3'>
                  {showDay && (
                    <div className='day1'>
                      <h3>{video.day}</h3>
                    </div>
                  )}
                  <div className='description'>
                    <div className='card-body'>
                      <img src={video.src} width='220px' alt={video.description} />
                      <div>
                        <div className='second-description'>
                          <p className='card-text'>{video.description}</p>
                          <p> <ImCross /> <BsThreeDotsVertical /></p>
                        </div>
                        <p>Primal Space 8000k</p>
                        <p className='text-small'>
                          Have you ever thought about space debris and wondered whether or not it can be controlled or what happens if that debris lands on your property? There are millions of pieces of space debris surrounding our Earth from old satellites all the way down to flecks of paint, but when it comes to objects making it to the ground we only need to worry about the really large pieces (since the small ones will burn up in the atmosphere). In many ways, some space fans even see debris falling near them as lucky instead of unlucky. Want to know why? In this video I'm talking about Space Debris; what it is, how it can (or can't) be controlled and what happens when it hits the ground.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='sidepart-container'>
          <Sidepart />
        </div>
      </div>
    </>
  );
};

export default Newfiles;
