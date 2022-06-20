const express= require('express');
const app = express();
const port =process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Server startet sucessfully with mon');
});

app.get('/blog',(req,res)=>{
    res.send('Haha its a blog');
});

app.get('/about',(req,res)=>{
    res.send('hoho you are seeing about me haaha');
});

app.listen(port,()=>{
    console.log('Listening to port',port);
})
