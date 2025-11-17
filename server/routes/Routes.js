const { Router } = require("express");
const { registerVoter, loginVoter, getVoter } = require("../controllers/voterController");
const {addElection,getElection, getElections, updateElection, removeElection, getCandidatesOfElection, getElectionVoters}= require("../controllers/electionController")
const {addCandidate,getCandidate,removeCandidate,voteCandidate} = require("../controllers/candidateController")

const authMiddleware = require("../middleware/authMiddleware")


const router = Router();

// Register voter
router.post('/voters/register', registerVoter);

// Login voter
router.post('/voters/login', loginVoter);

// Get voter by ID
router.get('/voters/:id',authMiddleware, getVoter);



router.post('/elections', authMiddleware, addElection)
router.get('/elections',authMiddleware, getElections)
router.get('/elections/:id', authMiddleware, getElection)
router.delete('/elections/:id', authMiddleware, removeElection)
router.patch('/elections/:id', authMiddleware, updateElection)
router.get('/elections/:id/candidates', authMiddleware, getCandidatesOfElection)
router.get('/elections/:id/voters',authMiddleware, getElectionVoters)



router.post('/candidates' , authMiddleware, addCandidate)
router.get('/candidates/:id', authMiddleware, getCandidate)
router.delete('/candidates/:id', authMiddleware, removeCandidate)
router.patch('/candidates/:id', authMiddleware, voteCandidate)


module.exports = router;
