require('../tools/db')

const ShopMode4 = require('../modules/shops4')

ShopMode4.find({},function (err,data) {
    console.log(data)
})