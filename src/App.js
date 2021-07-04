import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList';
import Email from './components/Email';
import SendMail from './components/SendMail';
import { selectSelectedMail, selectSendMessageIsOpen } from './features/mailSlice'
import { selectUser } from './features/userSlice'
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const selectedMail  = useSelector(selectSelectedMail);
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect( () => {
  
    auth.onAuthStateChanged((authUser) => {
             if(authUser){
               dispatch(login({
                 uid: authUser.uid,
                 username: authUser.displayName,
                 email: authUser.email,
                 photo: authUser.photoURL,
               }))
             }else{
                dispatch(logout())
             }
    })
  
  }, [ dispatch ])


  return (
    <div className='App'>
      
      { user ? (
 <Router>
 <Header />

 <div className='app_body'>
   <Sidebar />

   <Switch>
     <Route path='/mail'>
    { selectedMail && <Email />}
     </Route>
     <Route path='/'>
       <EmailList />
     </Route>
   </Switch>

{sendMessageIsOpen && <SendMail />}

 </div>
</Router>
      ): <Login /> }

      
    </div>
  );
}

export default App;
