const express = require('express');
var usermodel = require('../model/user');
const router = express();
const request = require('umi-request').default;
const cors = require('cors');


router.post('/createuser', (req,res)=>{


    var data = {
     os : {
         name: 'os',
        type : { 
            name: 'first',
            flavor: {
                name : "v1",
            }
          },
          timestamp: new Date()
      }
    }

    const data2= {
        id: 1
    }
    request.get(`http://[::1]:8001/${data2}`, { getResponse: true })
    .then(function({ data, response }) {
      console.log(data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
    })
    .catch=(e)=>{
        console.log("e",e)
      }

    usermodel.create(data).then((userdata)=>{
        console.log("user data",userdata)
        res.send(userdata)
    })})




router.get('/test',(req,res)=>{
    res.send("test")

})

router.get('/:id',(req,res)=>{
    console.log("id",req.params.id)
 usermodel.findOne({"os.type.flavor.name": req.params.id}).then(result => {
        res.send({"result" :result})

    })
})




// router.get('/match',(req,res)=>{

//    usermodel.aggregate([
//        {$match:  { os:   } }
//    ]).then(user =>{
//        res.send(user)
//    })
//    })
   



    module.exports = router;