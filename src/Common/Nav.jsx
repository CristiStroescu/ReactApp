import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav-styles'>
            <NavLink className='nav-link-item' to="/">Users</NavLink>
            <NavLink className='nav-link-item' to="admin">Admin</NavLink>
        </nav>
    );
};

export default Nav;