// ==================== ADD CANDIDATE
// POST : api/candidates
// PROTECTED(only admin)

const addCandidate = (req, res, next) =>{
    res.json("Add candidates")

}


// ==================== GET CANDIDATE
// GET : api/candidates/:id
// PROTECTED

const getCandidate = (req, res, next) =>{
    res.json("Get candidates")

}



// ==================== DELETE CANDIDATE
// DELETE : api/candidates/:id
// PROTECTED(only admin)

const removeCandidate = (req, res, next) =>{
    res.json("DELETE candidates")

}

// ==================== VOTE CANDIDATE
// PATCH : api/candidates/:id
// PROTECTED

const voteCandidate = (req, res, next) =>{
    res.json("Vote candidates")

}

module.exports = {addCandidate,getCandidate,removeCandidate,voteCandidate}