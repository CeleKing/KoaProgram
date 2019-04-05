const Koa = require('koa');
var Router = require('koa-router');

const app = new Koa()
const router = new Router();

router.get('/', (ctx, next) => {
    console.log(11);
    console.log(ctx)
})

app.use(async ctx => {
    ctx.body = 'Hello word'
})

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000)