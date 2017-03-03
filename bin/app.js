let Koa = require('koa');
let Router = require('koa-router');
let path = require('path');
let fs = require('fs');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();
const dist_path = path.join(__dirname, '..', 'dist');
const index_file_path = path.resolve(dist_path, 'index.min.html');

router.get('/', function (ctx, next) {
  this.response.type = 'html';
  this.response.body = fs.createReadStream(index_file_path);
});

app.use(router.routes());
app.use(serve(path.join(__dirname, '..', 'dist')));
module.exports = app;
 