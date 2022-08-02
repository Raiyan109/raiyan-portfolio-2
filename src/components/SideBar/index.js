import React from 'react';
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link to='/' className='logo'>
                <img src={logoS} alt="logo" />
                <img className='sub-logo' src={logoSubtitle} alt="slobodan" />
            </Link>

            <nav>
                <NavLink to='/' exact="true" activeclassname="active">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e" />
                </NavLink>
                <NavLink to='/about' exact="true" activeclassname="active" className="about-link">
                    <FontAwesomeIcon icon={faUser} color="4d4d4e" />
                </NavLink>
                <NavLink to='/contact' exact="true" activeclassname="active" className="contact-link">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e" />
                </NavLink>
            </nav>
        </div>
    );
};

export default SideBar;