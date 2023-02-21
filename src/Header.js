import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
<Avatar alt="Travis Howard" src="https://yt3.ggpht.com/10AsZKBxgIwz5RirjWaegVX9zIS5T96_oWu22D5ZuaNFKGAAKbE8EJrndfdAVB7TcKxtPOz49uQ=s68-c-k-c0x00ffffff-no-rj" />



function Header() {
  return (
    <div className='header'>
        <div className='header__left'><MenuIcon/>
         <img
        className='header__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt='youtube-logo'/>
        </div>
        <div className='header__input'>
        <input type="text" placeholder='Search'/>
        <SearchIcon className='header__inputbutton'/>
        </div>
        <div className='header__icon'>
        <VideoCallIcon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsIcon className='header__icon'/>
        <Avatar/>
        </div>
        
        
    </div>
  )
}

export default Header
