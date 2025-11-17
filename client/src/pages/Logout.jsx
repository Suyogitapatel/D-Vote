<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { voteActions } from '../store/vote-slice'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(voteActions.changeCurrentVoter(null))
    localStorage.removeItem("currentUser")
    navigate('/')

  }, [])
  return (
    <></>
=======
import React from 'react'

const Logout = () => {
  return (
    <div>
      logout
    </div>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  )
}

export default Logout
