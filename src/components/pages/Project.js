import React from 'react';
import '../styles/Project.css';

function Project() {
    return (
        // <div className="project">Project</div>
        <div >
            <div className='project-text'>Recent Work</div>
        <section class="project-container">
            <div class="project">
                <div class="project-top">
                    {/* <a href="/"><img src="/public/assets/img/homepage.png" alt="tattoo Photo"></a> */}
                </div>
                <div class="project-content">
                    <h4 class="tag tag-project">Charlie Cu Tattoo</h4>
                    <a href="https://github.com/anhcu/Charlie-Cu-Tattoo"><h4 class="title">Github</h4></a>
                    <a href="https://anhcu.github.io/Charlie-Cu-Tattoo/"><h4 class="title">Deployed</h4></a>
                    <p>Tattoo Pportfoilio of the tattoo artist lastest work.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    {/* <a href="/"><img src="/public/assets/img/homepage.png" alt="tattoo Photo"></a> */}
                </div>
                <div class="project-content">
                    <h4 class="tag tag-project">Toolin' Around</h4>
                    <a href="https://github.com/anhcu/Toolin-Around-1"><h4 class="title">Github</h4></a>
                    <a href="https://toolin-around.herokuapp.com/"><h4 class="title">Deployed</h4></a>
                    <p>This application make it easier to find and borrow tools from your neighbors and neighborhood near by.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    {/* <a href="/"><img src="/public/assets/img/homepage.png" alt="tattoo Photo"></a> */}
                </div>
                <div class="project-content">
                    <h4 class="tag tag-project">Budget Tracker</h4>
                    <a href="https://github.com/anhcu/Employee-Tracker"><h4 class="title">Github</h4></a>
                    <a href="https://pwa-traveler-tracker.herokuapp.com/"><h4 class="title">Deployed</h4></a>
                    <p>This application allows a user to document any expense with and without internet connection.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    {/* <a href="/"><img src="/public/assets/img/homepage.png" alt="tattoo Photo"></a> */}
                </div>
                <div class="project-content">
                    <h6 class="tag tag-project">Business Owner Note Taker</h6>
                    <a href="https://github.com/anhcu/Business-Owner-Note-Taker"><h4 class="title">Github</h4></a>
                    <a href="https://business-owner-note-taker.herokuapp.com/notes"><h4 class="title">Deployed</h4></a>
                    <p>Whether it's at the office during an important client conference call, at home or anywhere else, we have to jot down different types of notes and information on a routine basis. Note Taker can help you with that.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    {/* <a href="/"><img src="/public/assets/img/homepage.png" alt="tattoo Photo"></a> */}
                </div>
                <div class="project-content">
                    <h6 class="tag tag-project">Work Day Scheduler</h6>
                    <a href="https://github.com/anhcu/Work-Day-Scheduler"><h4 class="title">Github</h4></a>
                    <a href="/"><h4 class="title">Deployed</h4></a>
                    <p>A simple calendar application that allows a user to save events for each hour of the day.</p>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    {/* <a href="/"><img src="/public/assets/img/homepage.png" alt="tattoo Photo"></a> */}
                </div>
                <div class="project-content">
                    <h6 class="tag tag-project">E-Commerce</h6>
                    <a href="https://github.com/anhcu/E-Commerce-Back-End"><h4 class="title">Github</h4></a>
                    <a href="/"><h4 class="title">Deployed</h4></a>
                    <p>The backend is the part of an e-commerce site that users normally don't see. The backend is composed of servers, applications, and databases. It's responsible for organizing and storing data, and ensuring everything on the frontend operates smoothly.</p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Project;