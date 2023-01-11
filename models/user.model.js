const mongoose = require("mongoose")
// ! We are defining the fields that will be in our collection (AKA Table)
// ID is generated automatically so we dont need to include that here 
const UserSchema = new mongoose.Schema({
firstName:{
    type: String,
    required: true,
},
lastName:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
}
})


module.exports = mongoose.model("User", UserSchema)