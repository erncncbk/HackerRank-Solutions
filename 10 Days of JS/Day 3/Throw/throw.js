function isPositive(a) {

    if (a > 0) {
        console.log("YES");
        return "YES"
    } else if (a == 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error")
    }

}

isPositive(5);