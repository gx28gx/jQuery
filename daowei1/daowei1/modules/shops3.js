const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    title:String,
    name:String,
    desc:String,
    price:Number,
    oldPrice:Number,
    orderCount:Number,
    soldCount:Number,
    commentCount:Number,
    accept:String,
    praise:String,
    imgUrl:String,
    company:String,
    profile:String
})
module.exports = mongoose.model('shops3s',ShopSchema)