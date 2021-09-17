import React from 'react'
import '../styles/About2.css';

export default function About2() {
    return (
        <div className='container-about'>
            <div class="full-name">
                <span class="first-name">Anh</span>
                <span class="last-name">Cu</span>
            </div>
            <div class="contact-info">
                <span class="email">Email: </span>
                <span class="email-val">Anhcu714@gmail.com</span>
                <span class="separator"></span>
                <span class="phone">Phone: </span>
                <span class="phone-val">404-518-3986</span>
                <span class="separator"></span>
                <span> <a href="https://docs.google.com/document/d/12aLqDhG_LwmI-iwMubeUAxy4WYtasoBdI4JusfkhF8M/edit?usp=sharing"></a>Resume</span>


            </div>
            <div class="about">
                <span class="position">Bio</span>
                <span class="desc">
                    <p>Hi there! My name is Anh Cu and I’m a Web Developer. From the moment I produced “Hello World” in the console of my first application, I knew I was hooked into the world of software development. But software development has never been “just a job” for me, it’s offered an engaging challenge to continually learn and improve my skills in creating high quality software. What started with a simple “Hello World” has become a full-fledged passion that only gets more exciting as I go by.
                    </p><br />
                    <p>When I am not hunker down studying or learning new things about computer coding, I hang out with my family. I have 2 kids and a beautiful wife.
                    </p><br />
                </span>
                <hr></hr>
            </div>
            

            <div class="details">
                <div class="section">
                    <div class="section__title">Education</div>
                    <div class="section__list">
                        <div class="section__list-item">
                            <div class="left">
                                <div class="name">Georgia Tech</div>
                                <div class="addr">Atlanta, GA</div>
                                <div class="duration">Oct 2021</div>
                            </div>
                            <div class="right">
                                <div class="name">Full Stack Web Developer </div>
                                <div class="desc">Certification</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section__list-item">
                <div class="left">
                    <div class="name">Colorado Tech</div>
                    <div class="addr">Denver, CO</div>
                    <div class="duration">Jan 2018 - Feb 2019</div>
                </div>
                <div class="right">
                    <div class="name">Computer Science</div>
                    <div class="desc">General Study</div>
                </div>
                <hr></hr>
            </div>

            <div class="section">
                <div class="section__title">EXPERIENCE</div>
                <div class="section__list">
                    <div class="section__list-item">
                        <div class="left">
                            <div class="name">Charlie Cu Tattoo Website</div>
                            <div class="addr">Atlanta, GA</div>
                        </div>
                        <div class="right">
                            <div class="name">Display Website</div>
                            <div class="desc">Displaying artist latest work.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__list-item">
                <div class="left">
                    <div class="name">Northside Hospital</div>
                    <div class="addr">Atlanta, GA</div>
                    <div class="duration">Oct 2014 - Dec 2020</div>
                </div>
                <div class="right">
                    <div class="name">ER Tech</div>
                    <div class="desc">Data logging and concurrent documentation.</div>
                </div>
                <hr></hr>
            </div>

            <div class="section">
                <div class="section__title">Skills</div>
                <div class="section__list">
                    <div class="section__list-item">
                        <div class="text">HTML | CSS | JavaScript | React.js | jQuery</div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section__title">Databases</div>
                <div class="section__list">
                    <div class="section__list-item">
                        <div class="text">MongoDB | MySQL</div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section__title">Platforms & frameworks</div>
                <div class="section__list">
                    <div class="section__list-item">
                        <div class="text">Github | Heroko | Bootstrap </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section__title">Skills I am Learning </div>
                <div class="section__list">
                    <div class="section__list-item">
                        <div class="text">Wordpress & Typescript</div>
                    </div>
                </div>
                <hr></hr>
            </div>

            <div class="section">
                <div class="section__title">
                    Hobbies
                </div>
                <div class="section__list">
                    <div class="section__list-item">
                        Programming, deep sea fishing and training for Strongman.
                    </div>
                </div>
            </div>
        </div>
    );
}


