const Router = require('koa-router')
const router = new Router({ prefix: '/stamp_info' })
const { add } = require('../controller/stamp_info.controller')

// 增加邮票信息
router.post('/add', add)

module.exports = router