import React from 'react'
import Attch from '../img/attach.png'
import img from '../img/img.png'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className='send'>
        <img src={Attch} alt="" />
        <input type="file" id='file' style={{ display:'none'}} />
        <label htmlFor='file'>
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input