import React, { useEffect } from 'react'
import './Userinfo.css'
import userimg from '../../images/Aditya_Ghosh_profile.png'
import { useAuth0 } from '@auth0/auth0-react'

import {useState} from 'react';

const API_BASE = "http://localhost:3000/api/auth"

export default function Userinfo() {

  const {user,isAuthenticated} = useAuth0();

  const [User, setUser ] = useState({});
  

  const[namesize,setNameSize] = useState(50);
  const[emailsize,setEmailSize] = useState(50);
  const[gradyearsize,setGradyearSize] = useState(50);
  const[degsize,setDegSize] = useState(50);
  const [readonly,changeReadonly] = useState(true);
  const[status,setStatus] = useState('Edit Profile');
  const[inputbox,setinputbox] = useState('noneditable');


  const fetchData = () => {
    if(isAuthenticated  && status!=='Save')
    return fetch(API_BASE).then(res => res.json()).then(data=> data.filter(usr=> usr.email===user.email)).then(usr=> setUser(usr[0]));
  }

  useEffect(()=>{
    if(isAuthenticated   && status!=='Save')
    fetchData();
  });

  function changeUserinfo(){
    fetch(API_BASE + "/update", {  
      method: 'PUT',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: "password#123",
        degree: User.degree,
        graduation_year: User.graduation_year
      })
    })
  }

  function onbuttonclick () {
      changeReadonly(!readonly);
      setEmailSize(User.email.length);
      if(status==='Edit Profile')
      {
        setinputbox('editable');
        setNameSize(20);
        setGradyearSize(20);
        setDegSize(20);
        setStatus('Save');
      }
      else
      {
        window.location.reload(true);
        setinputbox('noneditable');
        setNameSize(User.name.length);
        setGradyearSize(User.graduation_year.length);
        setDegSize(User.degree.length);
        changeUserinfo();
        setStatus('Edit Profile');
      }
  }



  if(isAuthenticated){
  return (
    <div className='userinfo' key = {user.email}>
        <div className="userprof">
          <img src={userimg} alt="uesrimg" className='userprofimg' />
          {user.name} <br />
          NIT DURGAPUR
        </div>
        <div className="userinfdiv">
        <div className="info">
          <b>Name:</b>  <input className={inputbox} id='nm' value={User.name}  readOnly= 'true' size={namesize}/> 
        </div>
        <div className="info">
          <b>Email ID:</b>  <input className={inputbox} id='em' type='text' value={User.email}   readOnly = 'true' size={emailsize}/>
        </div>
        <div className="info">
          <b>Graduation Year:</b> <input className={inputbox} type='text' value={User.graduation_year} onChange={e =>setUser(prevstate => {return{ ...prevstate, graduation_year : e.target.value}} )} readOnly={readonly} size={gradyearsize}/> 
        </div>
        <div className="info">
          <b>Degree:</b> <input className={inputbox} type='text' value={User.degree}  onChange={e =>setUser(prevstate => {return{ ...prevstate, degree : e.target.value}} )} readOnly={readonly} size={degsize}/>
        </div>
        {/* <div className="info">
          <b>About:</b> <input className={inputbox} type='text' value={about}  onChange={e =>setAbout(e.target.value)} readOnly={readonly} size={aboutsize}/> 
        </div> */}
        <button className='edit' onClick={()=> onbuttonclick()}>{status}</button>
      </div>
      </div>
  )
  }
}
