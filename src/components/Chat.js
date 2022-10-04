import React from 'react'
import Messages from './Messages'
import Input from './Input'
import ChatHeader from './ChatHeader'

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader/>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;