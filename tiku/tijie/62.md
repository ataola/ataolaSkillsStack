## 解题思路

看情况这个很递归了，以一个节点为参考，例如oNode1,那么我们大致可以有如下几种情况，刚好就那么巧，oNode1就是oNode2的爸爸，或者oNode1的某个parentNode是oNode2的爸爸。

## 我的答案

```js
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)) {
        return oNode1;
    }else {
        return commonParentNode(oNode1.parentNode, oNode2);
    }
}
```
运行时间：1450ms，占用内存：77776k

## 牛客题解

**soulor.魂**

```js
//不用去递归
//也 不用管谁包含谁，只要随便找一个节点，直到某个祖先节点（或自己）包含另一个节点就行了。 oNode.contains(oNode)是等于true的
function commonParentNode(oNode1, oNode2) {
    for(;oNode1;oNode1=oNode1.parentNode){
        if(oNode1.contains(oNode2)){
            return oNode1;
        }
    }
}
```

**轻草荡花 ：** for(;;oNode1=oNode1.parentNode)更简

**jonker**

```js
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
        return oNode1;
    }else if(oNode2.contains(oNode1)){
        return oNode2;
    }else{
        return arguments.callee(oNode1.parentNode,oNode2);
    }
}
```


**toln**

```js
function commonParentNode(oNode1, oNode2) {
    if(oNode2.hasChildNodes(oNode1)||oNode1==oNode2){
        return oNode2;
    }
    else{
        while(oNode1){
            if(oNode1.hasChildNodes(oNode2)) return oNode1;
            oNode1 = oNode1.parentNode;
        }
    }
}
```

之前还不知道有hasChildNodes() 这种操作


