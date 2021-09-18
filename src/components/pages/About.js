import React from 'react';
import '../styles/About.css';


// const styles= {
//   aboutStyle: {
//     background: 'red',
//     color: 'white'
//   }
// }

const styles = {
  email: {
    color: 'black',
  },
  resume: {
    color: 'black',
  },
  about: {
    color: 'green',
    text_align: 'center',
  }
};


export default function About() {
  return (
    <div className="container">
      <div className="Card" id="bio">
        <div className="imgContainer"></div>
        
        <div className="card-content">
          <h2 style={styles.about} className="bio">About me</h2>
          <div className="description">

            <p>
              Hi there! My name is Anh Cu and I’m a Web Developer. From the moment I produced “Hello World” in the console of my first application, I knew I was hooked into the world of software development. But software development has never been “just a job” for me, it’s offered an engaging challenge to continually learn and improve my skills in creating high quality software. What started with a simple “Hello World” has become a full-fledged passion that only gets more exciting as I go by.
              <p></p>
              When I am not hunker down studying or learning new things about computer coding, I hang out with my family. I have 2 kids and a beautiful wife.
              <p></p>
              My hobbies are Deep sea fishing and training for Strongman.
            </p>

            <div className="name">
              <p className="author"><b>Anh Cu</b></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
