import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import SidebarOption from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import CallIcon from '@material-ui/icons/Call';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
import './Sidebar.css'

function Sidebar() {
  const dispatch = useDispatch();


  const compose = () => {
        dispatch(openSendMessage())          
    }

    return (
        <div className='sidebar' >
            <Button className='sidebar_compose' onClick={compose} startIcon={<AddIcon />}>Compose</Button>
            <SidebarOption Icon= {InboxIcon}   title='Inbox' number={3618} selected/>
            <SidebarOption Icon={StarBorderIcon}  title='Starred' number={3618}/>
            <SidebarOption Icon={WatchLaterIcon}  title='Snozzed' number={3618}/>
            <SidebarOption Icon={SendIcon}  title='Sent' number={3618}/>
            <SidebarOption Icon={DraftsIcon}  title='Drafts' number={3618}/>
            <SidebarOption Icon={ExpandMoreIcon}  title='More' number={3618}/>
       
         <div className="sidebar_footer">
             <IconButton>
                  <PersonIcon />
             </IconButton>
             <IconButton>
                  <DuoIcon />
             </IconButton>
       
             <IconButton>
                  <CallIcon />
             </IconButton>
       
         </div>
        
        </div>
    )
}

export default Sidebar
