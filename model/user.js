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
// })

// Ser: String,
// Typ: String,
// Fla: Number,
// OS: String,
// Com: String,
// Mod: String,
// price: String

})

const usermodel = mongoose.model('users',userSchema);
module.exports = usermodel;
