<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

=======
import React from 'react'

import { useParams } from 'react-router-dom'
import {elections} from '../data'
import { candidates } from '../data'
import { voters } from '../data'
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
import ElectionCandidate from '../components/ElectionCandidate'
import { IoAddOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-slice'
import AddCandidateModal from '../components/AddCandidateModal'
<<<<<<< HEAD
import { voteActions } from '../store/vote-slice'
const ElectionDetails = () => {


  //Access Control
 useEffect(() => {
  if(!token){
    navigate('/')
  }
}, [])
  const [isLoading, setIsLoading] = useState(false);
  const [election, setElection] = useState([])
  const [candidates, setCandidates] = useState([])
    const [voters, setVoters] = useState([])


  const {id} = useParams()
  const dispatch = useDispatch()
  const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing)
  const token = useSelector(state => state?.vote?.currentVoter?.token)
  const isAdmin = useSelector(state => state?.vote?.currentVoter?.isAdmin)
  const navigate = useNavigate()


  const getElection = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/elections/${id}`,{withCredentials:true,headers:{Authorization: `Bearer ${token}`}})
      setElection(response.data)
      
    } catch (error) {
      console.log(error)
      
    }

  }

  const getCandidates = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/elections/${id}/candidates`,{withCredentials:true,headers:{Authorization: `Bearer ${token}`}})
      setCandidates(response.data)
    } catch (error) {
      console.log(error)
      
    }
  }

  const getVoters = async() => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/elections/${id}/voters`,{withCredentials:true,headers:{Authorization: `Bearer ${token}`}})
      setVoters(response.data)
    } catch (error) {
      console.log(error)
      
    }
  }

  const deleteElection = async() => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/elections/${id}`,{withCredentials:true,headers:{Authorization: `Bearer ${token}`}})
      navigate('/elections')
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {
    getElection()
    getCandidates()
    getVoters()

  }, [])
=======
const ElectionDetails = () => {

  const {id} = useParams()
  const dispatch = useDispatch()

  const currentElection = elections.find(election => election.id == id)

  const electionCandidates = candidates.filter(candidate => candidate.election == id)

  const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing)
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521

//open add candidate modal
  const openModal = () => {
    dispatch(UiActions.openAddCandidateModal())
<<<<<<< HEAD
    dispatch(voteActions.changeAddCandidateElectionId)
=======
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  }

  return (
    <>
    <section className="electionDetails">
      <div className="container electionDetails__container">
<<<<<<< HEAD
        <h2>{election.title}</h2>
        <p>{election.description}</p>
        <div className="electionDetails__image">
          <img src={election.thumbnail} alt = {election.title}/>
=======
        <h2>{currentElection.title}</h2>
        <p>{currentElection.description}</p>
        <div className="electionDetails__image">
          <img src={currentElection.thumbnail} alt={currentElection.title} />
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
        </div>

        <menu className="electionDetails__candidates">
          {
<<<<<<< HEAD
            candidates.map(candidate => <ElectionCandidate key={candidate.id} {...candidate} />)
          }
          {isAdmin && <button className="add__candidate-btn"onClick={openModal}><IoAddOutline /></button>}
=======
            electionCandidates.map(candidate => <ElectionCandidate key={candidate.id} {...candidate} />)
          }
          <button className="add__candidate-btn"onClick={openModal}><IoAddOutline /></button>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
        </menu>

        <menu className="voters">
          <h2>Voters</h2>
          <table className="voters__table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {
<<<<<<< HEAD
                voters.map(voter => <tr key={voter._id}>
                  <td><h5>{voter.fullName}</h5></td>
                  <td>{voter.email}</td>
                  <td>{voter.createdAt}</td>
=======
                voters.map(voter => <tr key={voter.id}>
                  <td><h5>{voter.fullName}</h5></td>
                  <td>{voter.email}</td>
                  <td>14:43:34</td>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
                </tr>)
              }
            </tbody>
          </table>
        </menu>
<<<<<<< HEAD
        {isAdmin && <button className='btn danger full' onClick={deleteElection}>Delete Election<button/>}
=======
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
      </div>
    </section>


    {addCandidateModalShowing && <AddCandidateModal />}
    </>
  )
}

export default ElectionDetails
