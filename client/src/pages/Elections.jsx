<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
//import { elections as dummyElections} from '../data'
import Election from '../components/Election'
=======
import React, { useState } from 'react'
import { elections as dummyElections} from '../data'
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
import AddElectionModal from '../components/AddElectionModal'
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-slice'
import UpdateElectionModal from '../components/UpdateElectionModal'
<<<<<<< HEAD
import axios from 'axios'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'


const Elections = () => {
  const navigate = useNavigate()
const token = useSelector(state => state?.vote?.currentVoter?.token)
  //Access Control
 useEffect(() => {
  if(!token){
    navigate('/')
  }
}, [])
  const [elections, setElections] = useState([])
 const [isLoading, setIsLoading] = useState(false);
=======
import Election from '../components/Election'

const Elections = () => {
  const [elections, setElections] = useState(dummyElections)
 
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  const dispatch = useDispatch()

  //open add election modal
  const openModal = () => {
    dispatch(UiActions.openElectionModal())
  }
<<<<<<< HEAD
  
  
  const isAdmin = useSelector(state => state?.vote?.currentVoter?.isAdmin)
  const electionModalShowing = useSelector(state => state.ui.electionModalShowing)
  const updateElectionModalShowing = useSelector(state => state.ui.updateElectionModalShowing)

  const getElections = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/elections`,{withCredentials:true, headers:{Authorization:`Bearer ${token}`}})
      setElections(response.data)
    }catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  }

  useEffect(() =>{
    getElections()
  }, [])

=======

  const electionModalShowing = useSelector(state => state.ui.electionModalShowing)
  const updateElectionModalShowing = useSelector(state => state.ui.updateElectionModalShowing)

>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  return (
    <>
    <section className="elections">
      <div className="container elections__container">
        <header className="elections__header">
          <h1>Ongoing Elections</h1>
<<<<<<< HEAD
          {isAdmin && <button className="btn primary" onClick={openModal}>Create new Election</button>}
        </header>
        {isLoading ? <Loader/> : <menu className="elections__menu">
          {
            elections.map(election => <Election key={election.id} {...election} />)
          }
        </menu>}
=======
          <button className="btn primary" onClick={openModal}>Create new Election</button>
        </header>
        <menu className="elections__menu">
          {
            elections.map(election => <Election key={election.id} {...election} />)
          }
        </menu>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
      </div>
    </section>

    {electionModalShowing && <AddElectionModal />}
    {updateElectionModalShowing && <UpdateElectionModal />}
    </>
  )
}

export default Elections
