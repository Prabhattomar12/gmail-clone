import { IconButton, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import './SendMail.css';
import db from '../firebase';
import firebase from 'firebase';

function SendMail() {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
       
    db.collection('emails')
      .add({
          to: data.to,
          subject: data.subject,
          message: data.message, 
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       })
         
   dispatch(closeSendMessage())
        
  }


  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h4>New Message</h4>
        <IconButton>
          <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail_close_icon' />
        </IconButton>
      </div>
      <div className='sendMail_body'>
       <form onSubmit={handleSubmit(onSubmit)} > 
         <input name='to' type='email' placeholder='To' {...register('to', { required: true })} />
         {errors.to && <p className='sendMail_error'>To is required.</p>}
         <input name='subject' type='text' placeholder='Subject' {...register('subject', { required: true })} />
         {errors.subject && <p className='sendMail_error'>Subject is required.</p>}
         <input name='message' className='sendMail_message' type='text' placeholder='Message' {...register('message', { required: true })} />
         {errors.message && <p className='sendMail_error'>Message is required.</p>}
         <div className="sendMail_options">
           <Button type='submit' className='sendMail_btn'>Send</Button>
         </div>
         </form>
      </div>
  
    </div>
  );
}

export default SendMail;
