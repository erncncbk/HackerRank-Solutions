// #    1

// function sum(a, b) {
//     return a + b
// }

// Alternative:
let sum2 = (a, b) => a + b

// console.log(sum2(3, 4))


// #    2

// function isPositive(number){
//     return number >= 0
// }

// Alternative:
let isPositive2 = (num) => num >= 0

// console.log(isPositive2(-4))

// #    3
// function randomNum() {
//     return Math.random
// }

// Alternative:
let randomNum2 = () => Math.random(10)

// console.log(randomNum2())


class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }

}


let person = new Person('Eren')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)