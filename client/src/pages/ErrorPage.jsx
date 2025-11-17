import React, { useEffect } from 'react'
<<<<<<< HEAD
import Image from '../assets/404.gif.jpg'
=======
import Image from '../assets/404.gif'
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  // redirect user to previous page after 6 seconds
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 6000)
  })


  return (
    <div>
      <section className='errorPage'>
        <div className='errorPage__container'></div>
        <img src={Image} alt="Page not found" />
        <h1>404</h1>
        <p>This page does not exist. You will be redirect to the previous page shortly.</p>
      </section>
    </div>
  )
}

export default ErrorPage
