import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-slice'

const UpdateElectionModal = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription]= useState("")
    const [thumbnail, setThumbnail] = useState("")

    const dispatch = useDispatch()
    const idOfElectionToUpdate = useSelector(state => state?.vote?.idOfElectionToUpdate)
    const token = useSelector(state => state?.vote?.currentVoter?.token)

    const closeModal = () => {
        dispatch(UiActions.closeUpdateElectionModal())
    }

    const fetchElection = async () => {
        try {
            const response = await axios.get (`${process.env.REACT_APP_API_URL}/elections/${idOfElectionToUpdate}`,{withCredentials:true,headers:{Authorization: `Bearer ${token}`}})
            const election = await response.data 
            setTitle(election.title)
            setDescription(election.description)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchElection()
    }, [])


    return(
        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">
                    <h4>Edit Election</h4>
                    <button className="modal__close" onClick={closeModal}><IoMdClose/></button>
                </header>
                <form>
                    <div>
                        <h6>Election Title:</h6>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} name='title'/>
                    </div>
                    <div>
                        <h6>Election Description:</h6>
                        <input type="text" value={description} name='description' onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <h6>Election Thumbnail:</h6>
                        <input type="file" name='thumbnail' onChange={e => setDescription(e.target.files[0])}
                            accept="png,jpg,jpeg,webp,avif"/>
                    </div>
                    <button type="submit" className="btn primary">Update</button>
                </form>
            </div>
        </section>
    )
}

export default UpdateElectionModal
