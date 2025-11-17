import React from 'react'
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import Link from 'react-router-dom'
import { UiActions } from '../store/ui-slice'
import { voteActions } from '../store/vote-slice'
import { useSearchParams } from 'next/navigation'


const Election = ({_id: id,title,description,thumbnail}) => {


  const dispatch = useDispatch()
  const openModal = () => {
    dispatch(UiActions.openUpdateElectionModal())
    dispatch(voteActions.changeIdOfElectionToUpdate(id))
  }

  const isAdmin = useSelector(state => state?.vote?.currentVoter?.isAdmin)

=======
import {Link} from 'react-router-dom'


const Election = ({id,title,description,thumbnail}) => {
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
  return (
    <article className="election">
        <div className="election__image">
            <img src={thumbnail} alt={title}></img>
        </div>
        <div className="election__info">
            <Link to={`/elections/${id}`}><h4>{title}</h4></Link>
            <p>{description?.length > 255 ? description.substring(0,255) + "..." :
            description}</p>
            <div className="election__cta">
                <Link to={`/elections/${id}`} className="btn sm">View</Link>
<<<<<<< HEAD
                {isAdmin && <button className="btn sm primary">Edit</button>}
=======
                <button className="btn sm primary">Edit</button>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
            </div>
        </div>
    </article>
  )
}

export default Election
