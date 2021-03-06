const { urlencoded } = require('express');
const express = require('express')
const app = express();
const port = 8000;
//loaded the mongoose file here
const db=require('./config/mongoose');
app.use(urlencoded({extended:true}));

app.use('/', require('./routers/canditates'));

app.listen(port,function(err){
    if(err){
        // console.log(err);
        //this is just interpolation `` -these backtics..
        //${} in these brackets the particular thing gets evaluated..
        //to include a variable inside a string .this is interpolation
        console.log(`error is : ${err}`);
    }
    console.log(`port is running on port no:: ${port}`);
});
