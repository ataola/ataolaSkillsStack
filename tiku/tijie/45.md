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

**希留**

题目描述有问题，实际考察的是字符串中是否含有连续的三个任意数字，而不是三个连续的数字。依题，若存在连续的三个任意数字，则返回最早出现的三个数字，若不存在，则返回false。因此需要用到match方法，match()返回的是正则表达式匹配的字符串数组，连续的三个任意数字用正则表达式表示为/\d{3}/。

```js
function captureThreeNumbers(str) {
     //声明一个数组保存匹配的字符串结果
  var arr = str.match(/\d{3}/);
     //如果arr存在目标结果，则返回第一个元素，即最早出现的目标结果
     if(arr)
         return arr[0];
     else return false;
 }
```
**太阳光**

"是连续3个数字，不是3个连续的数字！！"上面一大半同学被误导，玛尼中文是体育老师教的

```js
function captureThreeNumbers(str) {
  var reg;
  if(reg = str.match(/(\d{3})/)){
    return reg[0];
  }else{
    return false;
  }
}
```

**冷冰冰**

```js
function captureThreeNumbers(str) {
    var arr = str.match(/\d{3}/);
    return (arr && arr[0]) || false;
}

```

