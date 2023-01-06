import React from 'react'
import './Userinfo.css'
import userimg from '../../images/Aditya_Ghosh_profile.png'
import { useAuth0 } from '@auth0/auth0-react'

import {useState, useEffect} from 'react';

const API_BASE = "http://localhost:3000/database"

export default function Userinfo() {
  const [name,setName] = useState(" Aditya Ghosh");
  const[namesize,setNameSize] = useState(50);
  const [email,setEmail] = useState("adityag30802@gmail.com");
  const[emailsize,setEmailSize] = useState(50);
  const [gradyear,setGradyear] = useState("2024");
  const[gradyearsize,setGradyearSize] = useState(50);
  const [deg,setDeg] = useState("B.Tech");
  const[degsize,setDegSize] = useState(50);
  const [about,setAbout] = useState("Software Development Engineer @Google");
  const[aboutsize,setAboutSize] = useState(50);
  const [readonly,changeReadonly] = useState(true);
  const[status,setStatus] = useState('Edit Profile');
  const[inputbox,setinputbox] = useState('noneditable');

  function onbuttonclick () {
      changeReadonly(!readonly);
      if(status==='Edit Profile')
      {
        setinputbox('editable');
        setNameSize(20);
        setEmailSize(20);
        setGradyearSize(20);
        setDegSize(20);
        setAboutSize(20);
        setStatus('Save');
      }
      else
      {
        setinputbox('noneditable');
        setNameSize(name.length);
        setEmailSize(email.length);
        setGradyearSize(gradyear.length);
        setDegSize(deg.length);
        setAboutSize(about.length);
        changeTodo();
        setStatus('Edit Profile');
      }
  }

  const {user,isAuthenticated} = useAuth0();


  const[todos,setTodos] = useState([]);

  console.log(todos);

  const GetTodos = () => {
    fetch(API_BASE).then(res => res.json()).then(data => setTodos(data));
  }

  useEffect(()=>{
    GetTodos();
  },[]);

  const changeTodo = async id => {
    const data = await fetch(API_BASE + id, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    }).then(res => res.json());
    setTodos([...todos,data]);
    // setPop
  }


  if(isAuthenticated){
  return (
    <div className='userinfo'>
    
      {todos.map(todo=>(
      <div  key={todo._id} >
        <div className="userprof">
          <img src={userimg} alt="uesrimg" className='userprofimg' />
          {todo.name}
          NIT DURGAPUR
        </div>
        <div className="userinfdiv">
        <div className="info">
          <b>Name:</b>  <input className={inputbox} type='text' value={name} onChange={e =>setName(e.target.value)} readOnly={readonly} size={namesize}/> 
        </div>
        <div className="info">
          <b>Email ID:</b>  <input className={inputbox} type='text' value={email}  onChange={e =>setEmail(e.target.value)} readOnly={readonly} size={emailsize}/>
        </div>
        <div className="info">
          <b>Graduation Year:</b> <input className={inputbox} type='text' value={gradyear} onChange={e =>setGradyear(e.target.value)} readOnly={readonly} size={gradyearsize}/> 
        </div>
        <div className="info">
          <b>Degree:</b> <input className={inputbox} type='text' value={deg}  onChange={e =>setDeg(e.target.value)} readOnly={readonly} size={degsize}/>
        </div>
        <div className="info">
          <b>About:</b> <input className={inputbox} type='text' value={about}  onChange={e =>setAbout(e.target.value)} readOnly={readonly} size={aboutsize}/> 
        </div>
        <button className='edit' onClick={()=> onbuttonclick()}>{status}</button>
      </div>
      </div>
      ))}
      
  
    </div>
  )
  }
}
