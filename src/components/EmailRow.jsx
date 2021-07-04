import React from 'react'
import './EmailRow.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import  { IconButton, Checkbox } from '@material-ui/core';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setSelectedMail } from '../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
  const dispatch = useDispatch();         
  const history = useHistory();
  const handleClick = () => {
      history.push('/mail');
      dispatch(setSelectedMail({
        id,
        title,
        subject, 
        description,
        time
      }))
  }
  return (
        <div onClick={handleClick} className='emailRow'>
             <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                  <StarBorderIcon />    
                </IconButton>   
                <IconButton>
                  <LabelImportantIcon />    
                </IconButton>   
             </div>
             <div className="emailRow_title">
                 <h4>{title}
                 </h4>
             </div>

             <div className="emailRow_message">
                 <h3>{subject}
                  <span className='email_description'>{description.substring(0, 20)}</span>
                 </h3>
            </div>
            <div className="emailRow_time">
                <h4>{time}</h4>
                </div>            
        </div>
    )
}

export default EmailRow
