## 代码检查

>基于npm的代码检查工作流

* [eslint](https://eslint.org)
* [stylelint](https://stylelint.io)
* [jsonlint](https://github.com/zaach/jsonlint)
* [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)

&nbsp;&nbsp;**package.json的相应配置：**
```
 "scripts": {
    "lint:js": "eslint *.js",
    "lint:css": "stylelint *.less",
    "lint:json": "jsonlint --quiet *.json",
    "lint:markdown": "markdownlint --config .markdownlint.json *.md",
    "test": "npm run lint:js && npm run lint:css && npm run lint:json && npm run lint:markdown && mocha tests/"
  },
  "devDependencies": {
    "chai": "^4.1.2",
    "eslint": "^4.11.0",
    "jsonlint": "^1.6.2",
    "markdownlint-cli": "^0.5.0",
    "mocha": "^4.0.1",
    "stylelint": "^8.2.0",
    "stylelint-config-standard": "^17.0.0"
  }
```

