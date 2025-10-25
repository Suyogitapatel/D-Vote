const{Schema, model,Types} = require('mongoose')



const voterSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    votedElections
})