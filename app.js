
var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var port = 4000;
const fictionalCats = require('./cats');

app.use(express.static('public'));
app.use(express.json());

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({extended:false}));



app.post('/api/post',(req,res)=>{
   const newCat = {
    //  id : req.body.id,
      name : req.body.name
   }
   fictionalCats.push(newCat);

   console.log(fictionalCats)

   res.json(newCat);

})

app.get("/user/api",(req,res)=>{

   res.send([
      { id:1,username:"aaa",displayName:"aaa"},
      { id:2,username:"bbb",displayName:"bbb"},
      { id:3,username:"ccc",displayName:"ccc"},

   ]);

})

app.get('/cat',(req,res)=>{
res.send(`<h1>Fictional Cats</h1>
<h2>${fictionalCats[3].name}</h2>`);
});

app.get('/form',(req,res)=>{
   res.sendFile(__dirname + "/form.html");
   });

   app.get('/color',(req,res)=>{
      res.sendFile(__dirname + "/color.html");
      });

      app.get('/hover',(req,res)=>{
         res.sendFile(__dirname + "/Myhover.html");
         });

         app.get('/',(req,res)=>{
            res.sendFile(__dirname + "/Myhover.html");
            });

app.listen(port,'0.0.0.0',function(){
   console.log('The server is running, ' +
   ' please open your browser at http://192.168.29.190:%s',
   port);
   
   })


//
// opens the url in the default browser 
//open('http://192.168.29.190:%s');



