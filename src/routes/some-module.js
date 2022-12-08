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

module.exports.Car = Car