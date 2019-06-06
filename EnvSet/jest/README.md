## 测试环境之Jest

> Jest的测试环境搭建

```
#安装
npm install --save-dev jest
npm install babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env

# package.json
{
    "scripts": {
      "test": "jest"
    }
}

# .babelrc
{
    "presets": ["@babel/preset-env"]
}

# .eslintrc.js
module.exports = {
    "extends": ["standard","plugin:jest/recommended"]
};

#写的方法
function sum(a, b) {
    return a + b;
}
export default sum;

#验证写的方法
import sum from './index'

test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});


# 开始起飞 npm run test

PS D:\ataolaSkillsStack\EnvSet\jest> npm run test

> jest-cli@1.0.0 test D:\ataolaSkillsStack\EnvSet\jest
> jest ./test

 PASS  test/sum.test.js
  √ add 1 + 2 to equal 3 (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.138s, estimated 2s
Ran all test suites matching /.\\test/i.
PS D:\ataolaSkillsStack\EnvSet\jest> 

```

