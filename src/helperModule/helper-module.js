
function printData(data) {
    console.log(data)
}

function greet(name) {
    console.log(`Welcome ${name} to Node JS!!`)
}

Date.prototype.today = function() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[new Date().getDay()]
}

const getDay = () => {
    return new Date().today()
}

module.exports.printData = printData
module.exports.greet = greet
module.exports.today = getDay