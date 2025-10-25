// ====================ADD NEW ELECTION
// POST: api/elections
// PROTECTED(only admin)

const addElection = (req, res, next) =>{
    res.json("Add Election")

}


// ====================GET ALL ELECTIONS
// GET: api/elections
// PROTECTED

const getElections = (req, res, next) =>{
    res.json("Get all Election")

}



// ====================GET SINGLE ELECTION
// GET: api/elections/:id
// PROTECTED

const getElection = (req, res, next) =>{
    res.json("Get Single Election")

}


// ====================GET ELECTION CANDIDATES
// POST: api/elections/id/candidates
// PROTECTED

const getCandidatesOfElection = (req, res, next) =>{
    res.json("Get Candidates of Election")

}


// ====================GET VOTERS OF ELECTION
// POST: api/elections/:id/voters
// PROTECTED

const getElectionVoters = (req, res, next) =>{
    res.json("Get Election Voters")

}





// ====================UPDATE ELECTION
// PATCH: api/elections/:id
// PROTECTED(only admin)

const updateElection = (req, res, next) =>{
    res.json("Update Election")

}




// ====================DELETE ELECTION
// DELETE: api/elections/:id
// PROTECTED(only admin)

const removeElection = (req, res, next) =>{
    res.json("Delete Election")

}


module.exports = {addElection,getElection,getElections,updateElection,removeElection,getCandidatesOfElection,getElectionVoters}