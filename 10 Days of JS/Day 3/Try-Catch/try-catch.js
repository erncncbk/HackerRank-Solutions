/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {

    try {

        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);

        //var a = s.split("").reverse().join("")


    } catch (e) {

        console.log(e.message);
        console.log(s);
    }

}

reverseString("1324");