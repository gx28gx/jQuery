const mongoose = require('mongoose')

const ShopShema = new mongoose.Schema({
    serviceIndex:String,
    serviceType:Array,
    shopList:Array
})

module.exports = mongoose.model('shop',ShopShema)