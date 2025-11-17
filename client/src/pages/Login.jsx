import React, { useState } from 'react'
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { voteActions } from '../store/vote-slice';

const Login = () => {
  const [userData, setUserData] = useState({fullName: "", password: "", password2: ""})
  const [error, setError] = useState("");

  const dispatch = useDispatch();

=======
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState({fullName: "", password: "", password2: ""})
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521

  // function to chnage controlled inputs
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return{...prevState, [e.target.name]: e.target.value}
    })
  }
<<<<<<< HEAD
  const navigate = useNavigate;

  const loginVoter = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/voters/login`, userData)
      const newVoter = await response.data;
      // save new voter in local storage and update redux store
      localStorage.setItem("currentUser", JSON.stringify(newVoter))
      dispatch(voteActions.changeCurrentVoter(newVoter))
      navigate("/results")

    } catch (err) {
      setError(err.response.data.message)
      
    }
  }
=======
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521

  

  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign In</h2>
<<<<<<< HEAD
        <form onSubmit={loginVoter}>
          {error &&<p className="form__error-message">{error}</p>}
          
          <input type="text" name='email' placeholder='Email Address' onChange={changeInputHandler} autoComplete='true' autoFocus />
=======
        <form>
          <p className="form__error-message"> Any error from the backend</p>
          
          <input type="text" name='email' placeholder='Email Address' onChange={changeInputHandler} autoComplete='true' />
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
          <input type="text" name='password' placeholder='Password' onChange={changeInputHandler} autoComplete='true' />
          
          <p>Don't have an account ? <Link to='/register'>Sign up</Link></p>
          <button type='submit' className="btn primary">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
