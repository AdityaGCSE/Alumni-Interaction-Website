import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FiLogOut} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import './User.css'

export default function User() {
    const {user,logout,isAuthenticated} = useAuth0();
    if(isAuthenticated)
    {   
        return (
            <div>
            <NavDropdown title={<> <BiUserCircle/> <span id='username'>welcome {user.name} !</span> </>  } id="basic-nav-dropdown"  className='user'>
              <NavDropdown.Item href="/user"> <BiUser/> <span id='myprofile'>My Profile</span> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  onClick={()=>logout({returnTo:window.location.orgin})}> <FiLogOut/> Logout</NavDropdown.Item>
            </NavDropdown>
            </div>
          )
    }
}
