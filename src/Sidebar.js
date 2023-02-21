import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import whatshot from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'


function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={whatshot} title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbDownAltOutlinedIcon} title="Liked Videos" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
        <hr/>
    </div>
  )
}

export default Sidebar
