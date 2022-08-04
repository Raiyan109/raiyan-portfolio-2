import React from 'react';
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='linkedin.com/in/raiyan-kabir-1bb775229/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Raiyan109'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.facebook.com/profile.php?id=100008869806599'>
                        <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='nkedin.com/in/raiyan-kabir-1bb775229/'>
                        <FontAwesomeIcon icon={faGoogle} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;