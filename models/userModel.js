const mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true,

    },
    password : {
        type : String,
        require : true,
    }
});




module.exports = {User :mongoose.model("users",userSchema) };