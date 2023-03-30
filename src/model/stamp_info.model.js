const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const StampInfo = sequelize.define('stamp_info', {
  stamp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    commit: '邮票编号'
  },
  stamp_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '邮票名称'
  },
  stamp_counts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '邮票数量'
  },
  stamp_date: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: '发行日期'
  },
  stamp_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    comment: '面值'
  },
  stamp_author: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '作者'
  },
  stamp_image: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '图片'
  }
}, {
  freezeTableName: true,
  timestamps: false
})

module.exports = StampInfo