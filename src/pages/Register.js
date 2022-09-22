import React from 'react'
import Add from '../img/addAvatar.png'

function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Sümer Chat</span>
        <span className='title'>Giriş Yap</span>
        <form className='formList'>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="file" id='file' />
          <label htmlFor="file">
            <img src={Add} alt="" className='add' />
            <span>Add an avatar</span>
          </label>
          <button>Kayit Ol</button>
        </form>
        <p>Hesabin var mi? Giriş Yap</p>
      </div>
    </div>
  )
}

export default Register