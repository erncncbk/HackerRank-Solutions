// 1 = 00000001
// 2 = 00000010
//  1|2  R = 00000011 ==> R = 3 
//  1&2  R = 00000000 ==> R = 0

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Read, Write, Execute

// 00000100 
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message =
    (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);