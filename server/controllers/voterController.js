const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Votermodel = require('../models/voterModel')
const HttpError = require('../models/ErrorModel');
const voterModel = require('../models/voterModel');





// ====================REGISTER NEW VOTER
// POST: api/voters/register
// UNPROTECTED

const registerVoter = async (req, res, next) =>{
    try {
        const {fullName, email, password, password2} = req.body;
        if(!fullName || !email || !password || !password2){
            return next(new HttpError("Fill in all fields.", 422 ))
        }
//       make all emails lowercase
         const newEmail = email.toLowerCase()
         //check if the email already exist in db
         const emailExists = await voterModel.findOne({email: newEmail})
        if(emailExists) {
            return next(new HttpError("Email already exist.", 422))
        } 
        //make sure password 6+ characters
        if((password.trim().length) < 6){
            return next(new HttpError("Password should be ateast 6 characters", 422))
        }
        //make sure passwords match
        if(password != password2){
            return next(new HttpError("Password do not match", 422))
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //No user/voter should be admin except for one with email "achiver@gmail.com"
        let isAdmin = false;
        if(newEmail == "achiver@gmail.com"){
            isAdmin = true
        }
        // save new voter to db
        const newVoter = await Votermodel.create({fullName, email: newEmail, password: hashedPassword, isAdmin})
        res.status(201).json(`New Voter ${fullName} created.`)
    } catch (error) {
        return next(new HttpError("Voter registration failed.", 422))
    }

}




// function to generate tocken
const generateToken = (payload) =>{
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1d"})
    return token;
}


//===================LOGIN VOTER
// POST : api/voters/login
//UNPROTECTED
const loginVoter = async (req, res, next) =>{
   try {
    const{email, password} = req.body;
    if(!email || !password) {
        return next(new HttpError("Fill in all fields", 422))
    }
    const newEmail= email.toLowerCase()
    const voter = await voterModel.findOne({email: newEmail})
    if(!voter) {
        return next(new HttpError("Invalid credentials."))
    }
    // compare passwords
    const comparePass = await bcrypt.compare(password,voter.password)
    if(!comparePass){
        return next(new HttpError("Invalid credentials.",422))
    }
    const{id: id, isAdmin, votedElections} = voter;
    const token = generateToken({id, isAdmin})

    res.json({token, id, votedElection, isAdmin})
   } catch (error) {
    return next(new HttpError("Login failed. Please ccheck your credentials or try again later", 422))
   }

}



//===================GET VOTER
// GET : api/voters/:id
//PROTECTED
const getVoter = async (req, res, next) =>{
   try {
    const{id} = req.params;
    const voter = await Votermodel.findById(id).select("-password")
    res.json(voter)
   } catch (error) {
    return next(HttpError("Couldn't get voter", 404))
   }

}




module.exports ={registerVoter ,loginVoter , getVoter}