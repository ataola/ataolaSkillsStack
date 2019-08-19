let testArr = [1, 9, 9, 7, 0, 6, 1, 3];

/**
 * 
 * @param {Array} Arr 
 */

function randomChange(Arr) {
    Arr.sort(function(lhs, rhs) {
        if(Math.random() < 0.5) {
            return -1;
        }else {
            return 1;
        }
    });
}

console.log("源数组：", testArr);
randomChange(testArr);
console.log("随机打乱数组：", testArr);
