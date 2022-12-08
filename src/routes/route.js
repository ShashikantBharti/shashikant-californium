const express = require('express');
const router = express.Router();
const _ = require('underscore')
const helper = require('../helperModule/helper-module')
// const car = require('./some-module')

router.get('/test-me', function (req, res) {
    helper.printData('Hello Bro!! Wassup.')
    helper.greet('Shashikant Bharti')
    console.log('Today is', helper.today())
    let arr = [11,12,34,45,56,67,78,89,90]
    console.log(_.first(arr))
    console.log(_.first(arr, [3]))
    // car.setColor('Red')
    // console.log(car.getColor())
    res.send('My first ever api!')
});

router.get('/test-you', function (req, res) {
    res.send('My first experiment!')
});

router.get('/test', function (req, res) {
    res.send('Hello World!! I am node js. express js is most popular library.')
});

module.exports = router;