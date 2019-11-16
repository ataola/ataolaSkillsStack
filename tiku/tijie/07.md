## 解题思路

选自浙江工业大学网络选拔赛，大致我想了两种思路，一种是用数组，因为灵活，大致是一圈一圈绕，还有一种是字符串，一行一行来，但是只要一般就好，下面的直接镜像上面的，以中间那条为基线，这题有点绕，脑阔疼。


## 实现代码(基于字符串)

```js
function gao_diekuang(n, a, b) {
    let res = '';
    let start = 0;
    let end = n;
    let flag = null;
    let flags = null;
    let flage = null;
    let flagd = null;
    let mid = Math.floor(n / 2) + 1;
    let mirrorStr = '';
    if (mid % 2 === 0) {
        flag = true;
        flagd =true;
    } else {
        flag = false;
        flagd = false;
    }
    for (let i = 0; i < mid; i++) {
        flags = flagd;
        flage = flagd;
        for (let j = 0; j < n; j++) {
            if (i === 0) {
                if ((i === 0 && (j === 0 || j === n - 1))) {
                    res += ' ';
                } else {
                    if (flag) {
                        res += b;
                    } else {
                        res += a;
                    }
                }
            } else if (i === mid - 1) {
                if (flagd) {
                    res += b;
                } else {
                    res += a;
                }
                flagd = !flagd;
            } else {
                if (j >= start && j <= end - 1) {
                    if (flag) {
                        res += b
                    } else {
                        res += a;
                    }
                } else if (j < start) {
                    if (flags) {
                        res += b;
                    } else {
                        res += a;
                    }
                    flags = !flags;
                } else if (j > end - 1) {
                    if(flage) {
                        if(j % 2 ===0) {
                            res += b;
                        }else {
                            res += a;
                        }
                    }else {
                        if(j % 2 ===0) {
                            res += a;
                        }else {
                            res += b;
                        }
                    }
                }
            }

        }
        flag = !flag;
        start += 1;
        end -= 1;
        if(i === mid -2) {
            mirrorStr = res.split('').reverse().join('');
        }
        res += '\n';
    }
    res += mirrorStr;
    return res;
}

console.log(gao_diekuang(5, '@', 'W'));
console.log(gao_diekuang(11, 'B', 'A'));

```