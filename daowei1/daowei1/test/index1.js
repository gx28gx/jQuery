require('../tools/db')
const Shop1Model1 = require('../modules/service')
Shop1Model1.find({},function (err,data) {
    console.log(data)
})