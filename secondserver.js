const express = require('express');
const app = express();
const port = process.env.PORT || 5001;


app.get('/',(req,res)=>{
    res.send('Server two started');
});

app.listen(port,()=>{
    console.log('server two listening port',port);
})