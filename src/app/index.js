const { koaBody } = require('koa-body')
const Koa = require('koa')
const error = require('koa-json-error')
const router = require('../router/stamp_info.route')
const app = new Koa()

// 注册koaBody中间件，解析请求体中的body，挂载到ctx.request.body上
app.use(koaBody())

// 注册路由
app.use(router.routes()).use(router.allowedMethods())

// 处理错误
app.use(error())

module.exports = app