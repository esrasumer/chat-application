import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Sümer Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar