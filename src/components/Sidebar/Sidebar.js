import React from 'react';
import "./Sidebar.scss";
import LogoS from "../../asssets/images/logo-s.png";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='side-bar'>
            <div className='side-bar-content'>
                <div className='top-logo'>
                    <div className='logo'>
                        <img src={LogoS} />
                    </div>
                    <h3>Ajay</h3>
                </div>
                <div className='pages'>
                    <ul>
                        <li className='home'>
                            <NavLink exact to='/' activeclassname="active" style={isActive => ({ color: isActive ? "green" : "blue" })}>
                                <span className='icon'>
                                    <i class="fa fa-home fa-2x" aria-hidden="true" ></i>
                                </span>
                                <span className='text'>
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li className='about'>
                            <NavLink exact to='/about' activeclassname="active" className="active">
                                <span className='icon'>
                                    <i class="fa fa-user fa-2x" aria-hidden="true" ></i>
                                </span>
                                <span className='text'>About</span>
                            </NavLink>
                        </li>
                        <li className='contact-me'>
                            <NavLink exact to='/contact' activeclassname="active" className="active">
                                <span className='icon'>
                                    <i class="fa fa-envelope fa-2x" aria-hidden="true" ></i>
                                </span>
                                <span className='text'>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='social-media-links'>
                    <ul>
                        <li>
                            <a
                                target="_blank"
                                rel='noreference'
                                href=''
                            >
                                <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel='noreference'
                                href=''
                            >
                                <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel='noreference'
                                href=''
                            >
                                <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar