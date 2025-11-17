import React, { useState } from 'react'
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
=======
import { Link } from 'react-router-dom'
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521

const Register = () => {
  const [userData, setUserData] = useState({fullName: "", password: "", password2: ""})

<<<<<<< HEAD
  const [error, setError] = useState("");
  const navigate = useNavigate();

=======
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  // function to chnage controlled inputs
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return{...prevState, [e.target.name]: e.target.value}
    })
  }

<<<<<<< HEAD
  const registerVoter = async(e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/voters/register`, userData)
      navigate('/')
      
    } catch (err) {
      setError(err.response.data.message)
      
    }
  }

=======
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  

  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign Up</h2>
<<<<<<< HEAD
        <form onSubmit={registerVoter}>
          {error &&<p className="form__error-message">{error}</p>}
=======
        <form>
          <p className="form__error-message"> Any error from the backend</p>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
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
