const express = require('express');
var router = express.Router();


const Testimonial = require('../model/testiominal');

router.get('/testiominal',(req,res)=>{
    res.render('/testiominal/index')
})





exports = router;