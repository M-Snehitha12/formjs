// import express from 'express';
const express=require('express');
const app=express();
app.use(express.static('public'));
app.get('./form.html',function(req,res)
{
    res.sendFile(__dirname+"/"+"form.html");
})
app.get('/process_get',function(req,res){
    var response={
        first_name:req.query.firstname,
        last_name:req.query.lastname
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(3000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at http://%s:%s",host,port)
})