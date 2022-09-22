import React from 'react'
import Png from '../img/add.png'
import Cam from '../img/cam.png'
import More from '../img/more.png'


function Home() {
  return (
    <div className='bigContainer'>
        <div className='sidebar'>
          <div className='navbar'>
            <span className='logoHome'>Sümer Chat</span>
            <img src={Png} alt="" className='avatar' />
            <span className='name'>Esra Sümer</span>
            <button className='logOut'>logOut</button>
          </div>
          <div className='chats'>
            <input type="text" />
          </div>
        </div>
        <div className='chatPanel'>
          <div className='chatBar'>
            <span>name</span>
            <img src={Cam} alt="" />
            <img src={Png} alt="" />
            <img src={More} alt="" />
          </div>
          <div className='mesasages'></div>
          <input type="text" />
        </div>
    </div>
  )
}

export default Home