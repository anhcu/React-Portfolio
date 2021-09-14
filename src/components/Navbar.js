import React from 'react';
import '../components/styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className='nav'>
        <div className='navLeft'>Anh Cu</div>
        <div className='navRight'></div>
            <ul className='navbar'>
                <li className='listItem'>
                    <a 
                    href='#Home'
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nva-link active' : 'nav-link'}
                    >Home
                    </a>
                </li>
                <li className='listItem'>
                    <a
                    href='#About'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    > 
                    About
                    </a>
                </li>

                <li className='listItem'>
                    <a
                    href='#Project'
                    onClick={() => handlePageChange('Project')}
                    className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                    > 
                    Project
                    </a>
                </li>
                <li className='listItem'>
                    <a
                    href='#Contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link avtive' : 'nav-link'}
                    >
                    Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

