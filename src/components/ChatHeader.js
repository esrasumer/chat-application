import React from 'react'
import cam from '../img/cam.png'
import add from '../img/add.png'
import more from '../img/more.png'

const ChatHeader = () => {
    return (
        <div className="chatInfo">
            <p>Jane</p>
            <div className='chatIcons'>
                <img src={cam} alt="" />
                <img src={add} alt="" />
                <img src={more} alt="" />
            </div>
        </div>
    )
}

export default ChatHeader