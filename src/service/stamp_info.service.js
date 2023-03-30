const StampInfo = require('../model/stamp_info.model')
class StampInfoService {
  async addStamp ({ ...args }) {
    const res = await StampInfo.create({ ...args })
    return res
  }
}

module.exports = new StampInfoService()