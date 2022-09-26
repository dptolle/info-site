import React from 'react';
import logo from '../assets/logo192.png';

export default function Navbar(){
    return (
        <nav className='nav--container'>
            <img className='nav--icon' src={logo} alt='React logo'/>
            <h2 className='nav--logo_text'>ReactFacts</h2>
            <h3 className='nav--title'>React Course - Project 1</h3>
        </nav>
    );
  }
