const Koa = require('koa');
const app = new Koa()
// const router = new Router();
var router = require('koa-frouter');
var logger = require('koa-logger');
var bodyParser = require('koa-bodyParser');
var staticCache = require('koa-static-cache');
var errorhandler = require('koa-errorhandler');
var session = require('koa-generic-session');
var MongoStore = require('koa-generic-session-mongo');
var flash = require('koa-flash')
var gzip = require('koa-gzip')
var scheme = require('koa-scheme')
var routerCache= require('koa-router-cache')
var render = require('co-ejs')
var config = require('config-lite')

var merge = require('merge-descriptors')
var core = require('./co.ts')
var renderConf = require(config.renderConf)
merge(renderConf.locals || {}, core, false)

app.keys = [renderConf.locals.$app.name]
app.use(errorhandler())
app.use(bodyParser())
app.use(staticCache(config.staticCacheConf))
app.use(logger())
app.use(session({
  store: new MongoStore(config.mongodb)
}))
app.use(flash())
app.use(scheme(config.schemeConf))
app.use(routerCache(app, config.routerCacheConf))
app.use(gzip())
app.use(render(app, renderConf))
app.use(router(app, config.routerConf))

app.listen(config.port, function() {
  console.log('Server listening on:', config.port)
})



// router.get('/', (ctx, next) => {
//     console.log(11);
//     console.log(ctx)
// })

// app.use(async ctx => {
//     ctx.body = 'Hello word'
// })

// app
//   .use(router.routes())
//   .use(router.allowedMethods());
// app.listen(3000)