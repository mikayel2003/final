var request=require("request");
var fs=require("fs");
var forEach = require('async-foreach').forEach;
fs.readFile("usersfinals.json","utf8",function(err,data){
        var users=JSON.parse(data);
        var i=0;
        
        forEach(users,function(link,index,arr){
                var url1=link.followers_url;
                var array=0;
                var options={
                     url:url1,
                     headers:{
                        'User-Agent':'request'
                      }
                };
                ///////////////////
               
                request(options,function(err,response,json){
                        var file=JSON.parse(json);
                        
                        array=file.length;
                        var app={
                                id:link.id,
                                login:link.login,
                                repos:link.repos,
                                followers_url:array
                        };
                        var pat=JSON.stringify(app);
                        fs.appendFile("userfollowers.json",pat);
                });
                
                //////////////
        });
});