## 解题思路

抓重点，随机数组且有范围和个数限制，我们一个一个击破，先实现一个方法，可以产生一个随机数组且元素不重复的，之后我们在根据次数调用它。

## 我的答案

```js
/**
 * @description range [2, 32]
 * @param {*} n 
 */
function fn(n) {
    let resArr = [];
    while(n !==0 ) {
        generateNum(resArr);
        n--;
    }
    function generateNum(arr) {
        let randomNum = parseInt(Math.random()*31 + 2, 10);
        if(arr.includes(randomNum)) {
            generateNum(arr);
        }else {
            arr.push(randomNum);
        }
    }
    return resArr;
}

console.log(fn(30).toString());

```

