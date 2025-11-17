import { createSlice, current } from "@reduxjs/toolkit"


<<<<<<< HEAD
const currentVoter = JSON.parse(localStorage.getItem("currentUser"))
=======
const currentVoter = {id:"v1", token:"sfsdfdfsd", isAdmin: true}
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
const initialState = {selectedVoteCandidate: "",currentVoter,selectedElection:"",idOfElectionToUpdate:"",
    addCandidateElectionId:""}
const voteSlice = createSlice({
    name:"vote",
    initialState,
    reducers:{
        changeSelectedVoteCandidate(state, action) {
            state.selectedVoteCandidate=action.payload;
        },
<<<<<<< HEAD
        changeCurrentVoter(state, action){
            state.currentVoter = action.payload;

        },
        changeSelectedElection(state, action){
            state.selectedElection=action.payload;
        },
        changeIdOfElectionToUpdate(state, action){
            state.idOfElectionToUpdate=action.payload;
=======
        changeSelectedElection(state, action){
            state.selectedElection=action.payload;
        },
        changeIdOfCandidateElectionId(state, action){
            state.addCandidateElectionId=action.payload;
>>>>>>> fe84bdb6aa64d3128583873587d7c11a57e58521
        },
        changeAddCandidateElectionId(state, action){
            state.addCandidateElectionId=action.payload;
        }
    }
})


export const voteActions = voteSlice.actions

export default voteSlice