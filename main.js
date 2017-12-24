const express=require('express');
const hbs=require('hbs');
var app= express();
var port=process.env.PORT || 80;
const fs=require('fs');
app.set('view engine','hbs');
app.use(express.static(__dirname ));
app.use((req,res,next)=>{
  var now = new Date().toString();
  var log=`now:${now}URL:${req.baseUrl} method:${req.method}`;
  console.log(log);
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err)
    console.log("unable to log server");
  });
  next();
});
/*app.get('/',(req,res)=>{
 res.send({ name:'utsav',
  likes:['business','music']
});
});*/
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('date',()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('upstream',(text)=>{
  return text.toUpperCase();
});
app.get('/tree',(req,res,next)=>{
  res.render('about.hbs',{credit:'some author',text:'urvashi krishnatra'});
  next();
});
app.get('/detail',(req,res,next)=>{
  res.render('detail.hbs',{
    good:"community",person:"man"
  });
  next();
});


                            app.use('/', function(req, res){
                               console.log('End');
                            });

app.get('/blue',(req,res)=>{
    res.render('rexa.hbs',{credit:'some author'});
});
app.get('/',(req,res)=>{res.send({great:"mom n dad r great!"})});
app.listen(port,(req,res)=>{
  console.log(`server is on port ${port}`);
});
/*app.listen(3000,(req,res)=>{
  console.log("server on port:3000"+__dirname);
});*/
