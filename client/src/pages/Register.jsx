import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [userData, setUserData] = useState({fullName: "", password: "", password2: ""})

  // function to chnage controlled inputs
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return{...prevState, [e.target.name]: e.target.value}
    })
  }

  

  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign Up</h2>
        <form>
          <p className="form__error-message"> Any error from the backend</p>
          <input type="text" name='fullName' placeholder='Full Name' onChange={changeInputHandler} autoComplete='true' autoFocus />
          <input type="text" name='email' placeholder='Email Address' onChange={changeInputHandler} autoComplete='true' />
          <input type="text" name='password' placeholder='Password' onChange={changeInputHandler} autoComplete='true' />
          <input type="text" name='password2' placeholder='Confirm Password' onChange={changeInputHandler} autoComplete='true' />
          <p>Already have an account ? <Link to='/'>Sign in</Link></p>
          <button type='submit' className="btn primary">Register</button>
        </form>
      </div>
    </section>
  )
}

export default Register
