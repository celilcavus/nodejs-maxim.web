const express = require('express');
var router = express.Router();

const validatior = require('express-validator');



const AboutModel = require('../model/about');



router.get('/about', (req, res) => {
    res.render('about/index')
});

router.post('/add-about', (req, res) => {
    let i = new AboutModel(req.body.title, req.body.subtitle).Add();
    if (typeof (i) == 'object') {
        return res.redirect('/about');
    }
});

router.get('/about/GoToAboutList',(req,res)=>{
    new AboutModel().GetAll().then((result) => {
        res.render('about/GoToAboutList',{model:result[0]});
    }).catch((err) => {
        console.log(err);
    });
});


router.get('/about/Delete/:id',(req,res)=>{
    new AboutModel().Delete(req.params.id).then((result) => {
        if (result) {
            res.redirect('/about/GoToAboutList')
        }
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/about/Update/:id',(req,res)=>{
    new AboutModel().GetById(req.params.id).then((result) => {
        if (result) {
            res.render('about/Update',{model:result[0][0]});
        }
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/about/update-about/:id',(req,res)=>{
    new AboutModel(req.body.title,req.body.subtitle).Update(req.params.id).then((result) => {
        if (result) {
            res.redirect('/about/GoToAboutList');
        }
    }).catch((err) => {
        console.log(err);
    });
})


module.exports = router;