import React from 'react'
import AddLoads from '../AddLoads/AddLoads';
import ContactInfo from '../ContactInfo/ContactInfo'
import Profile from '../Profile/Profile';
import './Header.css'

const Header = ({loads,setLoads}) => {
 
  return (
        <div className='Header'>
            <div className='logo'><img src="https://unitedtrade.am/public/image/logo.png" alt="" /></div>
           <ContactInfo />
           <AddLoads loads={loads} setLoads={setLoads}/>
           <Profile />
            </div>
        
  )
}

export default Header