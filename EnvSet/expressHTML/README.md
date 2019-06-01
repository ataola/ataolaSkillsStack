## 基于Express的HTML模板脚手架

> Express 的HTML模板脚手架

```
# create project and install depend
$ npm i express-generator -g
$ npm i

# just test it works, visit http://localhost:3000
$ npm run start

# make html template works to edit in app.js

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
var ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

#emmmmmmm biu it works!



```