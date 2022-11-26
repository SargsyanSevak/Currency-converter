import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
  const [show,setShow] = useState(false)
  let navigate = useNavigate()
 
  return (
    <div className='profile_section'>
      <span className='profile-name' onClick={()=>{
       setShow(!show)
      }}>SS</span>
      <div className={show ? 'profile-items' : 'show'}>
        <ul>
          <li onClick={()=>{navigate('/')}}><i className="fa fa-duotone fa-right-from-bracket"></i></li>
          </ul>
      </div>
    </div>
    
  )
  
}

export default Profile