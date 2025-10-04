import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
        <h2>Sign In</h2>
        <form>
          <p className="form__error-message"> Any error from the backend</p>
          
          <input type="text" name='email' placeholder='Email Address' onChange={changeInputHandler} autoComplete='true' />
          <input type="text" name='password' placeholder='Password' onChange={changeInputHandler} autoComplete='true' />
          
          <p>Don't have an account ? <Link to='/register'>Sign up</Link></p>
          <button type='submit' className="btn primary">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
