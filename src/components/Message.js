import React from 'react'

function Message() {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello!</p>
        <img src="https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
    </div>
  )
}

export default Message;