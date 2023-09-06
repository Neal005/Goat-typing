const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.send('Hello cai loz!');
    console.log('Lucuto in main page');
})

app.post('/',function(req,res){
    res.send('This is Post!');
    console.log('Lucuto in post');
})

app.get('/flights/:from-:to',function(req,res){
    const routeParams=req.params;
    const from=routeParams.from;
    const to=routeParams.to;
    res.send('Flight from '+from+' to '+to);
    console.log('flight from ',from,' to ',to,' \n va lucuto in console!');
})

app.listen(3000,function(){
    console.log('server is online in: http://localhost:3000/');
})