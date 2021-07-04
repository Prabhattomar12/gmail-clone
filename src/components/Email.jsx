import React from 'react';
import './Email.css';
import { IconButton } from '@material-ui/core';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import SnoozeIcon from '@material-ui/icons/Snooze';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { selectSelectedMail } from '../features/mailSlice';
import { useSelector } from 'react-redux'

function Email() {

 const selectedMail = useSelector(selectSelectedMail);
 
  return (
    <div className='email'>
      <div className='email_tools'>
        <div className='email_tools_left'>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ReportIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MarkunreadIcon />
          </IconButton>
          <IconButton>
            <SnoozeIcon />
          </IconButton>
        </div>

        <div className='email_tools_rights'>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>


       <div className="email_body">
           <div className="email_body_header">
               <div className="email_body_header_left">
                   <h3>{selectedMail.subject}</h3>
                   <p>{selectedMail.title}</p>
               </div>
               <div className="email_body_header_right">
                   <p>{selectedMail.time}</p>
               </div>

           </div>

           <div className="email_body_content">
               <h4>{selectedMail.subject}</h4>
               <p>{selectedMail.description}</p>
           </div>
       </div>
    </div>
  );
}

export default Email;
