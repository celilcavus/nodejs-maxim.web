const express = require('express');
var router = express.Router();

const HomeModel = require('../model/homeModel')

router.get('/home/index', (req, res) => {
    res.render('home/index')
});

router.post('/home/HomeAdd', (req, res) => {
    let i = new HomeModel(req.body.title, req.body.subtitle).Add();
    if (typeof (i) == 'object') {
        return res.redirect("/");
    }
});

router.get('/home/GetHomeList', (req, res) => {
    new HomeModel().GetAll().then((result) => {
        if (result != null) {
            res.render('home/GetHomeList', { model: result[0] });
        }
    }).catch((err) => {
        console.log(err);
    });
});

router.get('/home/Delete/:id', (req, res) => {
    new HomeModel().Delete(req.params.id).then((result) => {
        if (result) {
            res.redirect('/GetHomeList')
        }
    }).catch((err) => {
        console.log(err);
    });;
})

router.get('/home/Update/:id', (req, res) => {
    new HomeModel().GetById(req.params.id).then(result => {
        if (result) {
            res.render('home/Update', { model: result[0][0] });
        }

    }).catch(err => {
        console.log(err);
    })
})

router.post('/HomeUpdate', (req, res) => {
    new HomeModel(req.body.title, req.body.subtitle).Update(req.body.id).then((result) => {
        if (result) {
            res.redirect('Home/GetHomeList')
        }
    }).catch((err) => {
        console.log(err);
    });
})

module.exports = router;