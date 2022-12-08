const _ = require('underscore')

const printDate = () => {
    let d = new Date()
    d = _.first(d.toString().split(' '), [4]).join('-')
    console.log(d)
}

Date.prototype.month = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December']
    return months[new Date().getMonth()]
}

const printMonth = () => {
    let d = new Date()
    console.log(d.month())
}

const getBatchInfo = batch => {
    console.log('Californium, W3D4, Today\' topic is node js and module system.')
}

module.exports = {printDate, printMonth, getBatchInfo}