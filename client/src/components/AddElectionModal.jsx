import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-slice'
import axios from 'axios'
import { useNavigation } from 'react-router-dom'
=======
import { useDispatch } from 'react-redux'
import { UiActions } from '../store/ui-slice'
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521

const AddElectionModal = () => {
    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")
    const[thumbnail, setThumbnail] = useState("")

    const dispatch = useDispatch()
<<<<<<< HEAD
    const navigate = useNavigation()
=======
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521

    //close add election modal
    const closeModal = () => {
        dispatch(UiActions.closeElectionModal())
    }
<<<<<<< HEAD
    const token = useSelector(state => state?.vote?.currentVoter?.token)

    
    const createElection = async (e) =>{
        e.preventDefault()
        try {
            const electionData = new FormData()
            electionData.set('title',title)
            electionData.set('description',description)
            electionData.set('thumbnail',thumbnail)
            const response = await axios.post (`${process.env.REACT_APP_API_URL}/elections`, electionData,{
                withCredentials:true, headers: {Authorization: `Bearer ${token}`}})
                closeModal()
                navigate(0)
        } catch (error) {
            console.log(error)
        }
    }
=======
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521

  return (
    <section className="modal">
        <div className="modal__content">
            <header className="modal__header">
                <h4>Create New Election</h4>
                <button className="modal__close" onClick={closeModal}><IoMdClose /></button>
            </header>
<<<<<<< HEAD
            <form onSubmit={createElection}>
=======
            <form>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
                <div>
                    <h6>Election Title:</h6>
                    <input type="text" value ={title} onChange={e => setTitle(e.target.value)} name='title'/>
                </div>
                <div>
                    <h6>Election Description:</h6>
<<<<<<< HEAD
                    <input type="text" value={description} name='description' onChange={e => setDescription(e.target.value)}/>
=======
                    <input type="text" value={title} name='description' onChange={e => setDescription(e.target.value)}/>
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
                </div>
                <div>
                    <h6>Election Thumbnail:</h6>
                    <input type="file" name='thumbnail'onChange={e => setThumbnail(e.target.files[0])} accept="png, jpg, jpeg, webp, avif"/>
                </div>
                <button type="submit"  className="btn primary">Add Election</button>
            </form>
        </div>
    </section>
  )
}

<<<<<<< HEAD
export default AddElectionModal
=======
export default AddElectionModal
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
