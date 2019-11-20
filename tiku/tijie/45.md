## 解题思路

抓重点，在一串字符串中，找最后出现的三个相邻的连续数。 "返回最新出现的 3 个数字的字符串"这句其实我不是特别能理解，'9876543'输出987，我觉得最早是不是更应景一些，因为直观上看最新不应该是543吗？换言之他是不是在提示我们用"栈"结构哦。

## 我的答案

```js
function captureThreeNumbers(str) {
    let gao_strArr = str.split('').reverse().map(x => parseInt(x));
    for(let i = gao_strArr.length - 1; i >= 2; i++) {
        if(gao_strArr[i] + gao_strArr[i - 2] === 2 * gao_strArr[i - 1]){
            return '' + gao_strArr[i] + gao_strArr[i-1] + gao_strArr[i-2];
        }
    }
    return false;
}
```
不通过
您的代码已保存
运行超时:您的程序未能在规定时间内运行结束，请检查是否循环有错或算法复杂度过大。
case通过率为25.00%

测试了下答案是对的，超时可能是因为它的测试用例过大，哎不怎么会正则好惨。


果不其然，优化了下就过了

```js
function captureThreeNumbers(str) {
    let gao_strArr = str.split('').map(x => parseInt(x));
    console.log(gao_strArr);
    for(let i = 0 ; i <= str.length - 3; i++) {
        if(gao_strArr[i] + gao_strArr[i + 2] === 2 * gao_strArr[i + 1]){
            return '' + gao_strArr[i] + gao_strArr[i+1] + gao_strArr[i+2];
        }
    }
    return false;
}
```
运行时间：1453ms,占用内存：77880k


## 牛客取经

