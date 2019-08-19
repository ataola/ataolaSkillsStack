/**
 * @Author      Jiangtao   Zheng
 * @DateTime    2019-07-12
 * @Description  这个是产生了一个随机数再[start, end）
 * @param    {number} start 开始范围
 * @param    {[number]} end 结束范围
 * @return   {[number]} 返回结果
 */
function randomInteger(start, end) {
    return start + (end - start) * Math.random()
}


console.log("the random number in function randomInterger is ", randomInteger(5, 10))


// 那既然达不到预期那就再优化一波, 注释不会看楼上，懒得写

function randomInteger_2(start, end) {
    return Math.floor(start + (end - start) * Math.random())
}

console.log("the random number in function randomInterger_2 is ", randomInteger_2(5, 10))


//ES6新语法， 就喜欢写这种风格的，外行人看不懂增加bug难度，好刺激
let randomInteger_2_es6 = (start, end) => Math.floor(start + (end - start) * Math.random())


console.log("the random number in function randomInterger_3 is ", randomInteger_2_es6(500, 1000))
