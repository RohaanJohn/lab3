import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="top-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/" exact activeClassName="active-link">Home</NavLink>
                <ul className="nav-links">
                    <li><NavLink to="/sports" activeClassName="active-link">Sports</NavLink></li>
                    <li><NavLink to="/business" activeClassName="active-link">Business</NavLink></li>
                    <li><NavLink to="/tech" activeClassName="active-link">Tech</NavLink></li>
                    <li><NavLink to="/science" activeClassName="active-link">Science</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
