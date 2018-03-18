const mongoose = require('mongoose')
const ShopSchema = new mongoose.Schema({
    title:String,
    orderCount:Number,
    positiveRate:String,
    imgUrl:String
},{
    collection:'shops1s'
})
module.exports=mongoose.model('shops1',ShopSchema)