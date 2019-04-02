const Koa = require('koa');
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello word'
})

app.listen(3000)