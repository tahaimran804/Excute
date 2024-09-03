import Headroom from 'react-headroom';
import { RiMenuFold2Fill } from "react-icons/ri";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';

const Navbar = () => {
  const [open, setopen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="videoTag">
          <video src="/Images/VideoPlaceHolder.mp4" autoPlay muted loop />
        </div>
        <Headroom
          style={{
            backgroundColor: scrollPosition > 500 ? '#323432' : 'transparent', transition: 'background-color 0.6s ease',
          }}
        >
          <nav className='Nav_Item'>
            <span onClick={() => setopen(!open)} className="Menu_Icon">
              <RiMenuFold2Fill />
            </span>
            <div className="logo">
              <img src="/Images/Logo.png" alt="Logo" />
            </div>
            <div className='Nav_List'>
              <ul className={open ? 'active' : ''}>
                <li onClick={() => { window.scroll({ top: '0', left: '0', behavior: 'smooth' }) }}> <NavLink className='Nav_Link' to='/'>Home</NavLink></li>
                <li onClick={() => { window.scroll({ top: '750', left: '0', behavior: 'smooth' }) }}> <NavLink className='Nav_Link' to='/Services'>case-studies</NavLink></li>
                <li onClick={() => { window.scroll({ top: '1500', left: '0', behavior: 'smooth' }) }}> <NavLink className='Nav_Link' to='/Our_Client'>our services</NavLink></li>
                <li onClick={() => { window.scroll({ top: '2800', left: '0', behavior: 'smooth' }) }}> <NavLink className='Nav_Link' to='/Reviews'> clients say</NavLink></li>
                <li onClick={() => { window.scroll({ top: '4200', left: '0', behavior: 'smooth' }) }}> <NavLink className='Nav_Link' to='/Contact_Us'>contact us</NavLink></li>
              </ul>
            </div>
          </nav>
        </Headroom>
        <div className="Text_Img">
          <img src="/Images/slogan1.png" alt="Slogan" />
        </div>
      </header >
    </>
  );
};

export default Navbar;
