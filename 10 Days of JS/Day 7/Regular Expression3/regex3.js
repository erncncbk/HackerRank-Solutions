function regexVar() {


    var re = RegExp('\\d+', 'g');

    return re;

}

let test = "102.23";
// console.log(test)
let result = test.match(regexVar());

for (const e of result) {
    console.log(e);
}