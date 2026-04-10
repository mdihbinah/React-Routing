import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Hello from Header</h1>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobile">Mobile</a>
                <a href="/laptop">Laptop</a>
                <a href=""></a> */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobile'>Mobile</NavLink>
                <NavLink to='/laptop'>Laptop</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;