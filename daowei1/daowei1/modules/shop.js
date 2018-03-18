const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    serviceIndex:String,
    serviceType:Array,
    shopList:Array
})

module.exports = mongoose.model('shop',ShopSchema)