const express = require('express');
const router = express.Router();


const ContactModel = require('../model/contact');

router.get('/contact', (req, res) => {
    new ContactModel().GetAll().then((result) => {
        res.render('contact/index', { model: result[0] });
    }).catch((err) => {
        console.log(err);
    });
})