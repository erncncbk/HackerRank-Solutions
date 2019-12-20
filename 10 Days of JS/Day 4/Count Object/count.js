/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

// function getCount(objects) {
//     let counts = 0;

//     // iterate over array of objects
//     objects.map((item) => {
//         if (item.x === item.y) {
//             counts++;
//         }
//         return item;
//     });
//     return counts;
// }

// Alternative
function getCount(objects) {
    var flag = 0

    for (var i in objects) {
        if (objects[i].x == objects[i].y) {
            flag++;
        }
    }
    return flag
}

var objects = [{ x: 1, y: 2 }, { x: 4, y: 4 }, { x: 1, y: 4 }, { x: 12, y: 12 }];
console.log(getCount(objects));