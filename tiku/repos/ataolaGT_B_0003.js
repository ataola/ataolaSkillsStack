/**
 * 
 * @param {number} a_x a的横坐标
 * @param {number} a_y a的纵坐标
 * @param {number} b_x b的横坐标
 * @param {number} b_y b的纵坐标
 */
function vector_distance (a_x, a_y, b_x, b_y) {
    return Math.sqrt(Math.pow(b_x-a_x, 2) + Math.pow(b_y - a_y, 2))
}

console.log("坐标(1,2)和(3,4)的距离是：", vector_distance(1,2,3,4));
console.log("2根号2是：", Math.sqrt(8));

