import React, { useState, useEffect } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import db from '../firebase';
import { closeSendMessage } from '../features/mailSlice';

function EmailList() {

  const [ emails, setEmails] = useState([]);

  useEffect(() => {
    
    db.collection('emails')
      .onSnapshot(snapshot => {
            setEmails(snapshot.docs.map(doc => ({id: doc.id,
            data: doc.data() })));
      })

  }, []);

  console.log('Emails ', emails)

  return (
    <div className='email_list'>
      <div className='email_list_settings'>
        <div className='settings_left'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='settings_right'>
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className='email_list_sections'>
        <Section Icon={InboxIcon} title='Primary' color='#c04b37' selected />
        <Section Icon={GroupIcon} title='Secondary' color='blue' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>

      <div className='email_rows'>
       
        {emails.map(email => <EmailRow
                              id={email.id}
                              key={email.id}
                              title={email.data.to}
                              subject={email.data.subject}
                              description={email.data.message} 
                              time={new Date(email?.data?.timestamp?.seconds).toUTCString()} />)}

      </div>
    
    </div>
  );
}

export default EmailList;
