import React from 'react';
import '../styles/Home.css';

// const styles = {
//   github: {
//     color: '#6e5494',
//   },
//   linkedin: {
//     color: '2867B2',
//   },
// };


function Home() {
  return (
    <div className='bg'>
      <div className='header-title'>
        <h1 className='name'>Anh Cu</h1>
        <p className='web'> Web Developer</p>
        {/* <div className='link'>
          <ul>
            <a href="https://github.com/anhcu"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/anh-cu/"><i className="fa fa-linkedin"></i></a>
            <a href="mailto: anhcu714@gmail.com"><i className="fa fa-envelope"></i></a>
            <a href="https://docs.google.com/document/d/12aLqDhG_LwmI-iwMubeUAxy4WYtasoBdI4JusfkhF8M/edit?usp=sharing"><i className="fa fa-address-card"></i></a>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Home;