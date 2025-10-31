import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const AddCandidateModal = () => {
    const [fullName, setFullName] = useState("")
    const [motto, setMotto] = useState("")
    const [image, setImage] = useState("")



    return(
        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">
                    <h4>Add Candidate</h4>
                    <button className="modal__close"><IoMdClose /></button>
                </header>
                <form>
                    <div>
                        <h6>Candidate Name:</h6>
                        <input type="text" value={fullName} name='fullName' onChange={e => setFullName(e.target.value)} />
                    </div>
                    <div>
                        <h6>Candidate Motto:</h6>
                        <input type="text" value={motto} name='motto' onChange={e => setMotto(e.target.value)} />
                    </div>
                    <div>
                        <h6>Candidate Image:</h6>
                        <input type="file" name='image' onChange={e => setImage(e.target.files[0])} accept="png, jpg, jpeg, webp, avif" />
                    </div>
                    <button type="submit" className="btn primary">Add Candidate</button>
                </form>
            </div>
        </section>
    )
}

export default  AddCandidateModal