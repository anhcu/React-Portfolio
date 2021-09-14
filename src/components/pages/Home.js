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
    //  <div className="header">Header</div>
    <div className='header-title'>
      <h1>Anh Cu</h1>
      <p class='web'> Web Developer</p>
      <div>
        <ul>
        <a href="https://github.com/anhcu"><i class="fa fa-github"  ></i></a>
        <a href="https://www.linkedin.com/in/anh-cu/"><i class="fa fa-linkedin" ></i></a>
        <a href= "mailto: anhcu714@gmail.com"><i class="fa fa-envelope"></i></a>
        <a href="https://docs.google.com/document/d/12aLqDhG_LwmI-iwMubeUAxy4WYtasoBdI4JusfkhF8M/edit?usp=sharing"><i class="fa fa-address-card"></i></a>
        
      </ul>
      </div>
    </div>
    );
  }

export default Home;