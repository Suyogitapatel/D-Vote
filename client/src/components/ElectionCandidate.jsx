import React from 'react'
import { IoMdTrash } from 'react-icons/io'
<<<<<<< HEAD
import axios  from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const ElectionCandidate = ({fullName, image, motto, _id: id}) =>{
    const navigate = useNavigate();
    const token = useSelector(state => state?.vote?.currentVoter?.token)
    const deleteCandidate = async()=> {
        try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/candidates/${id}`,{withCredentials:true,headers:{Authorization: `Bearer ${token}`}})
      navigate(0)
      
    } catch (error) {
      console.log(error)
      
    }
    }
=======

const ElectionCandidate = ({fullName, image, motto, id}) =>{
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
    return(
        <li className="electionCandidate">
            <div className="electionCandidate__image">
                <img src={image} alt={fullName} />
            </div>
            <div>
                <h5>{fullName}</h5>
                <small>{motto?.length > 70 ? motto.substring(0, 70) + "..." : motto}</small>
<<<<<<< HEAD
                <button className="electionCandidate__btn" onClick={deleteCandidate}><IoMdTrash /></button>
=======
                <button className="electionCandidate__btn"><IoMdTrash /></button>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
            </div>
        </li>
    )
}

export default ElectionCandidate