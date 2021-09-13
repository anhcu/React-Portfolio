import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='nav'>
        <div className='navLeft'>Anh Cu</div>
        <div className='navRight'></div>
            <ul className='navbar'>
                <li className='listItem'>Home</li>
                <li className='listItem'>About</li>
                <li className='listItem'>Project</li>
                <li className='listItem'>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;

