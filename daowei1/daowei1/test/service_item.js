require('../tools/db')

const ShopMode3 = require('../modules/shops3')

ShopMode3.find({},function (err,data) {
    console.log(data)
})