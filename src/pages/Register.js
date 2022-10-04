import React from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function Register() {
  const [err,setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){

    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Register</span>
        <form className='formList' onSubmit={handleSubmit}>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="file" id='file' />
          <label htmlFor="file">
            <img src={Add} alt="" className='add' />
            <span>Add an avatar</span>
          </label>
          <button >Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register;