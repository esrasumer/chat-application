import React from 'react'
import cam from '../img/cam.png'
import add from '../img/add.png'
import more from '../img/more.png'
import Message from './Message'
import Input from './Input'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <p>Jane</p>
        <div className='chatIcons'>
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Message />
      <Input />
    </div>
  )
}

export default Chat;