let testArr = [7, 7, 5, 8, 5, 2, 1, 1, 19, 9, 17, 0, 6, 10, 7];

console.log(`数组自带的sort排序： ${testArr.sort()}`);

/**
 * 
 * @param {Array} Arr 测试数组
 * @param {string} align 方向， left right
 */
function qSort(Arr, align) {
    Arr.sort((lhs, rhs) => {
        if (lhs > rhs) {
            return align === "left" ? -1 : 1;
        } else if (lhs < rhs) {
            return align === "left" ? 1 : -1;
        } else {
            return 0;
        }
    })
}

qSort(testArr,"left");
console.log(`qsort以后的数组降序： ${testArr}`);

qSort(testArr,"right");
console.log(`qsort以后的数组升序： ${testArr}`);