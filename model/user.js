var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

const userSchema = new Schema({
 
    os : {
        name: String,
        type : {
            name :String,
            flavor: {
                name: String
            }
        },
        timestamp: String
    }
})

const usermodel = mongoose.model('users',userSchema);
module.exports = usermodel;
