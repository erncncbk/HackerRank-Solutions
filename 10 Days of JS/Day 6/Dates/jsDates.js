const process = require('process');

process.stdin.setEncoding('utf8');

let results = [];

process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        results.push(getDayName(chunk));
        // 2 = amount of lines you want to read
        if (results.length === 2) {
            for (let i = 0; i < results.length; i++) {
                console.log("Dates: " + results[i]);
            }
            //if you do not do a break this will go on forever until you press ctrl + c
            break;
        }
    }
});


// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here

    var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date = new Date(dateString)

    dayName = day_names[date.getDay()];


    return dayName;
}