import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import logo from '../../assets/images/ExpressMusicX-Logo.png';
import { FiSearch } from 'react-icons/fi';
import useOutsideClick from '../../hooks/useOutsideClick';

const Header = () => {
  const [searchboxActive, setSearchboxActive] = useState(false);

  const ref = useRef();
  const inputRef = useRef();
  useOutsideClick(ref, () => setSearchboxActive(false));

  useEffect(() => {
    if (searchboxActive) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [searchboxActive]);

  return (
    <header>
      <div className='header-container'>
        <div className='header-left'>
          <div className='header-logo'>
            <img src={logo} alt='Express Music X Logo' />
            <p>
              Express Music<span>X</span>
            </p>
          </div>
        </div>
        <div className='header-center'>
          <div className='header-breadcrumb'>
            <p>artist</p>
            <p className='breadcrumb-arrow'>{`>`}</p>
            <p>pranav</p>
          </div>
          <div className={`header-searchbox ${searchboxActive ? 'active' : ''}`} onClick={() => setSearchboxActive(true)} ref={ref}>
            <FiSearch style={{ color: `${searchboxActive ? '#2dbc58' : '#ffffff'} `, fontSize: '18px' }} />
            <input type='text' name='search' placeholder='Search Albums/Artists/Songs' autoFocus={searchboxActive} ref={inputRef} />
          </div>
        </div>
        <div className='header-right'></div>
      </div>
    </header>
  );
};

export default Header;
