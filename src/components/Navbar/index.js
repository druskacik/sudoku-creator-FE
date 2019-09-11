import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/database'>Database</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;