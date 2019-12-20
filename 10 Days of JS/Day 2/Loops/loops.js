/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowel = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < s.length; i++) {
        if (vowel.indexOf(s[i]) > -1)

            console.log(s[i])
    }

    for (var j = 0; j < s.length; j++) {
        if (vowel.indexOf(s[j]) < 0) {
            console.log(s[j])
        }

    }

}
console.log(vowelsAndConsonants("erncncbk"))