const { Router } = require("express");
const { registerVoter, loginVoter, getVoter } = require("../controllers/voterController");
const {addElection,getElection, getElections, updateElection, removeElection, getCandidatesOfElection, getElectionVoters}= require("../controllers/electionController")
const {addCandidate,getCandidate,removeCandidate,voteCandidate} = require("../controllers/candidateController")


const router = Router();

// Register voter
router.post('/voters/register', registerVoter);

// Login voter
router.post('/voters/login', loginVoter);

// Get voter by ID
router.get('/voters/:id', getVoter);



router.post('/elections', addElection)
router.get('/elections', getElections)
router.get('/elections/:id', getElection)
router.delete('/elections/:id', removeElection)
router.patch('/elections/:id', updateElection)
router.get('/elections/:id/candidates', getCandidatesOfElection)
router.get('/elections/:id/voters', getElectionVoters)



router.post('/candidates' , addCandidate)
router.get('/candidates/:id', getCandidate)
router.delete('/candidates/:id', removeCandidate)
router.patch('/candidates/:id', voteCandidate)


module.exports = router;
