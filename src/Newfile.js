import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Newfile.css'
import { SiYoutubeshorts } from "react-icons/si";
import { CiBoxList } from "react-icons/ci";
const videoHistory = [
  {
    day: 'Monday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'This is a very nice video that mainly describes everything about videos.',
  },
  {
    day: 'Tuesday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'This video provides an in-depth look into the history of video production.',
  },
  {
    day: 'Thursday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'This is a very nice video that mainly describes everything about videos.',
  },
  {
    day: 'Friday',
    src: 'https://images.unsplash.com/photo-1467093378883-9684de425866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'This video provides an in-depth look into the history of video production.',
  },

];

const Newfile = () => {
  return (
    <>
    <div>
        <div className='day'>
            <h1>Watch history</h1>
        </div>
        <div className='day1'>
            <h3>Friday</h3>
        </div>
        <div className='shorts-main'>
            <p><SiYoutubeshorts  className='shorts-icon' /> <span>Shorts</span>  </p>
            <p><CiBoxList /></p>
        </div>
    </div>
    <div className='top-class'>
        <div>
            <img src='https://images.unsplash.com/photo-1504813205186-380b1235a5d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='first' />
        </div>
        <div>
            <img src='https://images.unsplash.com/photo-1504813205186-380b1235a5d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='second' />
        </div>
        <div>
            <img src='https://images.unsplash.com/photo-1504813205186-380b1235a5d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='third' />
        </div>
    </div>
        <div className=''>
      <div className='row d-flex justify-content-center'>
        {videoHistory.map((video, index) => (
          <div key={index} className='col-md-8 my-3'>
            <div className=''>
              <div className='card-body '>
                <img src={video.src}  width="160px"  alt={video.description} />

                    <div className='side-section'>
                        <h5>Friday</h5>

                <p className='card-text'>{video.description}</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
        <div className='day'>
            <h1>Watch history</h1>
        </div>
        <div className='day1'>
            <h3>Friday</h3>
        </div>

    </div>
    <div className='friday'>
        <div><img src='https://images.unsplash.com/photo-1504813205186-380b1235a5d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='third' width="150px" />   </div>
        <div>
            <h5>Friday</h5>
            <p>Watched 2 videos</p>
        </div>
    </div>
    </>
    

  );
};

export default Newfile;