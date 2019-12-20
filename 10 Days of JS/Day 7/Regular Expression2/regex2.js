'use strict'

process.stdin.resume();

process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
})

function regexVar() {


    const re = RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);

    return re;
}

rl.on('line', input => {

    const re = regexVar()
    const a = input.trim().split().map(string => {
        return string.trim();
    });
    console.log(re.test(a));
    rl.close();


});