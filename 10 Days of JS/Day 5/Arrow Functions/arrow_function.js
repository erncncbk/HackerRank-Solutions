'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8')

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: console.log
})

function modifyArray(nums) {

    return nums.map((i) => i % 2 === 0 ? i * 2 : i * 3)

}

r1.on('line', input => {
    const a = input.split('').map(Number)
    console.log(modifyArray(a).toString().split(',').join(' '));
    r1.close()
})