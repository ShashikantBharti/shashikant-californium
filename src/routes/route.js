const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const logger = require('../logger/logger')           // Logger 
const helper = require('../util/helper')             // Helper
const formatter = require('../validator/formatter')  // Validator
const _ = require('underscore')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)

    // Problem 1.1
    logger.welcome('Shashikant Bharti')

    // Problem 2.1
    helper.printDate()
    // Problem 2.2
    helper.printMonth()
    
    // Problem 3.1
    formatter.trim('    This is trimmed String.    ')
    // Problem 3.2
    formatter.toLower('This IS a lower Case strING.')
    // Problem 3.3
    formatter.toUpper('This IS a UPPER Case strING.')

    // Problem 4.1
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December']
    console.log(lodash.chunk(months, 3))

    // Problem 4.2
    const oddNos = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(oddNos))

    // Problem 4.3
    const arr1 = [1,2,3,4,5,6]
          arr2 = [3,4,5,6,7,8]
          arr3 = [6,7,8,9,1,2]
          arr4 = [7,9,10,11,12]
          arr5 = [10,11,12,13,14] 
    console.log(lodash.union(arr1, arr2, arr3, arr4, arr5))

    // Problem 4.4
    const pairedArr = [['horror','The Shining'],
                        ['drama', 'Titanic'],
                        ['thriller', 'Shutter Island'],
                        ['fantasy','Pans Labyrinth']]   
                    
    console.log(lodash.fromPairs(pairedArr))

    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;