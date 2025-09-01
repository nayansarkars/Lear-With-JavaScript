/**
 * @Title: Traverse Arrays Element
 */

const arr = [1, 2, 3, 4, 5];
const n = arr[3];
const m = arr[2];
const x = 1 ,
    y = 0,
    z = 3;
console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

/**
 * 1 2 3 4 5
 * 0 1 2 3 4
 *
 * 'A' 'B' 'C' 'D'
 * 0  1  2  3
 * 
 * 1 B 3 5 F 0 true
 * 0 1 2 3 4 5 6
 */