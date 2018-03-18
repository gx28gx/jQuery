const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    iconUrl:String,
    area:String,
    city:String,
    comment:String,
    createtime:Number,
    nick:String,
    star:Number,
})
module.exports = mongoose.model('shops4s',ShopSchema)