class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.minVal = min
        this.maxVal = max
    }

    guess() {
        this.candidate = Math.round((this.maxVal - this.minVal) / 2 + this.minVal)

        return this.candidate
    }

    lower() {

        this.maxVal = this.candidate
    }

    greater() {
        this.minVal = this.candidate
    }
}

module.exports = GuessingGame;
