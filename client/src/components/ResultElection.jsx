<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { candidate } from '../data'
import CandidateRating from "./CandidateRating";
import axios from "axios";
import { useSelector } from "react-redux";

const ResultElection = ({ _id: id, thumbnail, title }) => {
  const [totalVotes, setTotalVotes] = useState(0);
  const [electionCandidate, setElectionCandidate] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const token = useSelector((state) => state?.vote?.currentVoter?.token);

  const getCandidate = async () => {
    setIsLoading(true);
    try {
      const response = await await axios.get(
        `${process.env.REACT_APP_API_URL}/elections/${id}/candidates`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      const candidates = await response.data;
      setElectionCandidate(candidates);
      // calculate the total votes in each election
      for (let i = 0; i < candidates.length; i++) {
        setTotalVotes((prevState = prevState += candidates[i].voteCount));
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCandidate();
  }, []);

  return (
    <>
      {isLoading &&  <Loader />}
      <article className="result">
        <header className="result__header">
          <h4>{title}</h4>
          <div className="result__header-image">
            <img src={thumbnail} alt={title} />
          </div>
        </header>
        <ul className="result__list">
          {electionCandidates.map((candidate) => (
            <CandidateRating key={candidate.id} {...candidate} />
          ))}
        </ul>
        <Link to={`/elections/${id}/candidates`} className="btn primary full">
          Enter Election
        </Link>
      </article>
    </>
  );
};

export default ResultElection;
=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { candidates } from '../data'
import CandidateRating from './CandidateRating'


const ResultElection = ({id, thumbnail, title}) => {
    const [totalVotes, setTotalVotes] = useState(521)

    // get candidates that belong to this election iteration
    const electionCandidates = candidates.filter(candidate =>{
        return candidate.election == id
    })

  return (
    <article className="result">
        <header className="result__header">
            <h4>{title}</h4>
            <div className="result__header-image">
                <img src={thumbnail} alt={title} />
            </div>
        </header>
            <ul className="result__list">
                {
                    electionCandidates.map(candidate => <CandidateRating key={candidate.id} {...candidate} />)
                }
            </ul>
            <Link to={`/elections/${id}/candidates`} className='btn primary full'>Enter Election</Link>
    </article>
  )
}

export default ResultElection
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
