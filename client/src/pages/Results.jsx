<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
// import { elections as dummyElections} from '../data'
import ResultElection from '../components/ResultElection'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Results = () => {
  const [elections, setElections] = useState([]) 
  
  const token = useSelector(state => state?.vote?.currentVoter?.token);
 const navigate = useNavigate()

  //Access Control
 useEffect(() => {
  if(!token){
    navigate('/')
  }
}, [])
  const getElections = async (e) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/elections`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      const elections = await response.data
      setElections(elections);
    } catch (error) {
      console.log(error)
      
    }
  }

  





=======
import React, { useState } from 'react'
import { elections as dummyElections} from '../data'
import ResultElection from '../components/ResultElection'


const Results = () => {
  const [elections, setElections] = useState(dummyElections) 
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  return (
    <section className="result">
      <div className="container result">
        {
          elections.map(election => <ResultElection key={election.id} {...election} />)
        }
      </div>
    </section>
  )
}

export default Results
