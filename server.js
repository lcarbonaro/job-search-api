const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(request,response)=>{
    let data = {"hello":"world"};
    response.json(data);
    //response.send('HELLO');
});

app.listen(PORT,()=>{
    console.log(`Server is up and listening on port ${PORT}`);
});