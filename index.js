const express = require('express');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const cors = require('cors');
const userModel = require('./model/user');
 mongoose.connect('mongodb://localhost/userdb', {useNewUrlParser: true});
 var connection = mongoose.connection;
 connection.on('error', console.error.bind(console, 'connection error:'));
 connection.once('open', function () {
 
const array = [

    {
         os : {
        name: "saad",
        type : {
            name :"saad",
            flavor: {
                name: "saad"
            }
        },
                timestamp: "String"
            }
        },
            { os : {
                name: "String",
                type : {
                    name :"String",
                    flavor: {
                        name: "String"
                    }
                },
                timestamp: String
            }
        }
]

     connection.db.collection("users", (err, collection)=>{
         collection.find({}).toArray((err, data)=>{
            if(data.length === 0 ){
                userModel.insertMany(array)
                .then((docs) => {
                    res.status(200).json({'success': 'new documents added!', 'data': result});
                })
                .catch((err) =>{
                    res.status(500).send(err);
                });
            }
            else {
                console.log(data); 

            }
        })
     });
 
 });



app.use(cors())
app.use('/user',userRoutes)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))