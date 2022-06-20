const express= require('express');
const app= express();
const port = process.env.PORT||5002;

app.get('/',(req,res)=>{
    res.send('huh feeling some comfort now');
});

app.listen(port,()=>{
    console.log('Listeninng port ',port);
});
