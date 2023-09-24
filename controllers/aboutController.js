const express = require('express');
var router = express.Router();


const AboutModel = require('../model/about');





// router.get('about/',(req,res)=>{

//     new AboutModel().GetAll().then((result)=>{
//         if (result != null) {
//             res.render('/about/index',{model:result[0]});
//         }
//     }).catch((err)=>{
//         console.log(err);
//     })
// });


router.get('about/',(req,res)=>{
    res.render('about/add-about')
});


module.exports = router;