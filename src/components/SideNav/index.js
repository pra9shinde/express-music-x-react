import React from 'react';
import './sidenav.css';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import logo from '../../assets/images/ExpressMusicX-Logo.png';

const SideNav = () => {
  return (
    <header>
      <div className='sidebar-container'>
        <div className='sidebar-logo'>
          <div className='sidebar-expand'>
            <IoIosArrowDropleftCircle />
          </div>
          <img src={logo} alt='Express Music X Logo' />
          <p>
            Express Music<span>X</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default SideNav;
