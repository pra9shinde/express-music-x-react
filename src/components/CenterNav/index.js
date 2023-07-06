import React, { useEffect, useRef, useState } from 'react';
import './centernav.css';
import useOutsideClick from '../../hooks/useOutsideClick';

import { FiSearch } from 'react-icons/fi';

const CenterNav = () => {
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
    <div className='centernav-container'>
      <div className='centernav-center'>
        <div className='centernav-breadcrumb'>
          <p>artist</p>
          <p className='breadcrumb-arrow'>{`>`}</p>
          <p>pranav</p>
        </div>
        <div className={`centernav-searchbox ${searchboxActive ? 'active' : ''}`} onClick={() => setSearchboxActive(true)} ref={ref}>
          <FiSearch style={{ color: `${searchboxActive ? '#2dbc58' : '#ffffff'} `, fontSize: '18px' }} />
          <input type='text' name='search' placeholder='Search Albums/Artists/Songs' autoFocus={searchboxActive} ref={inputRef} />
        </div>
      </div>
      <div className='centernav-right'></div>
    </div>
  );
};

export default CenterNav;
