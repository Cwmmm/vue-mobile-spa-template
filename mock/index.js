const Mock=require('mockjs')
const util=require('./util')
module.exports=function(app){
  app.get('/homepage/kingkong',function(rep,res){
    var json=util.getJsonFile('./homepage/kingkong.json')
    res.json(Mock.mock(json))
  }),
  app.get('/homepage/poislit',function(rep,res){
    var json=util.getJsonFile('./homepage/poislit.json')
    res.json(Mock.mock(json))
  })

}