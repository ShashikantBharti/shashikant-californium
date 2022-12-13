class Car {
    color = ''
    type = ''

    setColor(color) {
        this.color = color 
    }

    getColor() {
        return this.color
    }

    setType(type) {
        this.type = type
    }

    getType() {
        return this.type
    }
}

function greet() {
    console.log('Hello World!!')
}

function goodBye() {
    console.log('Bye!!')
}

module.exports.Car = Car
module.exports.greet = greet
module.exports.goodBye = goodBye