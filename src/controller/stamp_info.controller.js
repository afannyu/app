const { addStamp } = require('../service/stamp_info.service')

class StampInfoController {
  async add (ctx, next) {
    // 获取数据
    const { stamp_id, stamp_name, stamp_counts, stamp_date, stamp_price, stamp_author, stamp_image } = ctx.request.body
    // 操作数据库
    try {
      const res = await addStamp({ stamp_id, stamp_name, stamp_counts, stamp_date, stamp_price, stamp_author, stamp_image })
      ctx.body = {
        code: 0,
        message: '添加邮票成功',
        result: {
          stamp_id: res.stamp_id,
          stamp_name: res.stamp_name
        }
      }
    } catch (err) {
      console.info(err)
    }
  }
}

module.exports = new StampInfoController()