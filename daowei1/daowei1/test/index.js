require('../tools/db')

const ShopModel = require('../modules/shop')
const A = require('../modules/shop')

ShopModel.find({},function (err,data) {
    console.log(data)
})

