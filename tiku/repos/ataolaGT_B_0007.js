let testStr = "Let the life like summer flowers, and death like authumn leaves";

//找某个元素， 找到返回最前面的索引，找不到返回 -1
console.log("最开始的索引： ", testStr.indexOf("l"));

//替换
let testStr2 = testStr.replace("like", "be");
console.log("被替换后的重新生成的str：", testStr2);

//转大写，小写也是一样的就不写了
let testStr3 = testStr.toUpperCase();
console.log("转大写的str: ", testStr3);

