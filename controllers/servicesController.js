const express = require('express');
var router = express.Router();


const Services = require('../model/services');

router.get('/services', (req, res) => {
    res.render('services/index')
})

router.post('/services/services-add', (req, res) => {
    new Services(req.body.title, req.body.icon, req.body.description).Add().then(result => {
        if (result) {
            return res.redirect('/services')
        }
    }).catch(err => {
        console.log(err);
    });
})

router.get('/services/list', (req, res) => {
    new Services().GetAll().then((result) => {
        res.render('services/list', { model: result[0] });
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/services/update/:id', (req, res) => {
    new Services().GetById(req.params.id).then((result) => {
        res.render('services/update', { model: result[0][0] });
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/services/update/:id', (req, res) => {
    new Services(req.body.title, req.body.icon, req.body.description).Update(req.params.id).then(result => {
        if (result) {
            return res.redirect('/services/list')
        }
    }).catch(err => {
        console.log(err);
    });
})

router.get('/services/delete/:id', (req, res) => {
    new Services().Delete(req.params.id).then(result => {
        if (result) {
            return res.redirect('/services/list')
        }
    }).catch(err => {
        console.log(err);
    });
})



module.exports = router;