import React from 'react'
import Add from '../img/addAvatar.png'

function Login() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Sümer Chat</span>
        <span className='title'>Kayit Ol</span>
        <form className='formList'>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Giriş Yap</button>
        </form>
        <p>Hesabin yok mu? Kayit ol</p>
      </div>
    </div>
  )
}

export default Login;