import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux'
import { auth } from '../firebase'

function Header() {
  const { user } = useSelector(selectUser);
  

  return (
<div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src='/images/gmail-logo.jpg' alt='' />
      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
      </div>
      <div className='header_right'>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar onClick={() => auth.signOut() } src={user?.photo} />
      </div>
    </div>
  );
}

export default Header;
