import React from 'react';
import '../styles/Contact.css';

const styles = {
  email: {
    color: 'black',
  },
  resume: {
    color: 'black',
  },
};


export default function Contact() {
  return (
    <div className="containerContact ">
      <div className="card" id="bio">
        <div className="img-container"></div>
        <div className="card-content">
          <h2 className="bio">Thank you</h2>
          <div className="description">
            <p>
              Thank you for taking the time out of your busy schedule to view my portfolio.  I would love to join your wonderful team.  With my skills and qualifications, I’m a great candidate for this position.  I am committed to learning any new skills on my own to succeed in this role.
            </p>
            <div className="social">
              {/* <span>
                <a href="https://github.com/anhcu"><i style={styles.email} className="fab fa-github"></i></a>
              </span> */}
              {/* <span>
                <a href="https://www.linkedin.com/in/anh-cu/"><i i style={styles.resume} className="fab fa-linkedin-in"></i></a>
              </span> */}
              {/* <span>
                <a href="https://docs.google.com/document/d/12aLqDhG_LwmI-iwMubeUAxy4WYtasoBdI4JusfkhF8M/edit?usp=sharing"><i i style={styles.resume} className="far fa-address-card"></i></a>
              </span> */}
              {/* <span>
                <a href="mailto:anhcu714@gmail.com"><i i style={styles.resume} className="far fa-envelope"></i></a>
              </span> */}
              <div className="name">
                <p className="author"><b>Anh Cu</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
