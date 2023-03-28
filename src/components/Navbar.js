import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
 const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>Sümer Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        {/* <img src={currentUser.photoURL} alt="" /> */}
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar