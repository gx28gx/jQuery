
require('./tools/db')

const express = require("express")

var app = express()

app.use(express.static('public'))
/*引入模块*/
const ShopModel = require('./modules/shop')
const ShopModel2 = require('./modules/service')
const ShopModel3 = require('./modules/shops3')
const ShopModel4 = require('./modules/shops4')

app.get('/shop1',function (req,res) {
    ShopModel.find({},function (err,list) {
        if(!err){
            res.send({list:list})
            console.log('服务器启动成功')
        }
    })
})

app.get('/service',function (req,res){
    ShopModel2.find({},function (err,list1) {
        if(!err){
            res.send({list:list1})
            console.log('服务器启动')
        }
    })
})

app.get('/shop3',function (req,res) {
    ShopModel3.find({},function (err,list) {
        if(!err){
            console.log(list);
            res.send({list:list})
            console.log('服务器')
        }
    })
})

app.get('/shop4',function (req,res) {
    ShopModel4.find({},function (err,list) {
        if(!err){
            console.log(list);
            res.send({list:list})
            console.log('服')
        }
    })
})
app.listen(3000)

