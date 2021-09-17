import React from 'react';
import '../styles/Project.css';
import tattoo from '../img/homepage.png';
import tool from '../img/Toolin around.png';
import budget from '../img/budget.png';
import note from '../img/noteTaker.png';
import scheduler from '../img/scheduler.png';
import eCom from '../img/E-COMMERCE.png';

// const styles = {
//     project: {
//         background: 'green',
//     }
// }

function Project() {
    return (
        <div className='allProject'>
            <div className='project_text'>Recent Work</div>
            <section className="project-container">
                <div className="project">
                    <div className="project-top">
                        <img src={tattoo} alt=" Photo" />
                    </div>
                    <div className="project-content">
                        <h4 className="tag tag-project">Charlie Cu Tattoo</h4>
                        <a href="https://github.com/anhcu/Charlie-Cu-Tattoo"><h4 className="title">Github</h4></a>
                        <a href="https://anhcu.github.io/Charlie-Cu-Tattoo/"><h4 className="title">Deployed</h4></a>
                        <p>Tattoo Pportfoilio of the tattoo artist lastest work.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-top">
                        <img src={tool} alt=" Photo" />
                    </div>
                    <div className="project-content">
                        <h4 className="tag tag-project">Toolin' Around</h4>
                        <a href="https://github.com/anhcu/Toolin-Around-1"><h4 className="title">Github</h4></a>
                        <a href="https://toolin-around.herokuapp.com/"><h4 className="title">Deployed</h4></a>
                        <p>This application make it easier to find and borrow tools from your neighbors and neighborhood near by.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-top">
                        <img src={budget} alt=" Photo" />
                    </div>
                    <div className="project-content">
                        <h4 className="tag tag-project">Budget Tracker</h4>
                        <a href="https://github.com/anhcu/PWA-Budget-Trackers"><h4 className="title">Github</h4></a>
                        <a href="https://pwa-traveler-tracker.herokuapp.com/"><h4 className="title">Deployed</h4></a>
                        <p>This application allows a user to document any expense with and without internet connection.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-top">
                        <img src={note} alt=" Photo" />
                    </div>
                    <div className="project-content">
                        <h6 className="tag tag-project">Business Owner Note Taker</h6>
                        <a href="https://github.com/anhcu/Business-Owner-Note-Taker"><h4 class="title">Github</h4></a>
                        <a href="https://business-owner-note-taker.herokuapp.com/notes"><h4 className="title">Deployed</h4></a>
                        <p>Whether it's at the office during an important client conference call, at home or anywhere else, we have to jot down different types of notes and information on a routine basis. Note Taker can help you with that.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-top">
                        <img src={scheduler} alt=" Photo" />
                    </div>
                    <div className="project-content">
                        <h6 className="tag tag-project">Work Day Scheduler</h6>
                        <a href="https://github.com/anhcu/Work-Day-Scheduler"><h4 className="title">Github</h4></a>
                        <a href="/"><h4 className="title">Deployed</h4></a>
                        <p>A simple calendar application that allows a user to save events for each hour of the day.</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-top">
                        <img src={eCom} alt=" Photo" />
                    </div>
                    <div className="project-content">
                        <h6 className="tag tag-project">E-Commerce</h6>
                        <a href="https://github.com/anhcu/E-Commerce-Back-End"><h4 className="title">Github</h4></a>
                        <a href="/"><h4 className="title">Deployed</h4></a>
                        <p>The backend is the part of an e-commerce site that users normally don't see. The backend is composed of servers, applications, and databases. It's responsible for organizing and storing data, and ensuring everything on the frontend operates smoothly.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;