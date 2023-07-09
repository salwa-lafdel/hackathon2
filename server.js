const exp = require('express');
const bp = require('body-parser');
const DB = require('./modules/db.js');
const bcrypt = require('bcrypt');

const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'SALWA33@lafdel',
    database: 'yourvols'
  }
})

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));
//-------signup-----------------
app.post('/user',(req,res)=>{

  console.log("data : "+ req.body);

  DB.createUser(req.body)

  

  .then(data => {

    console.log(data);

    res.send({message:'OK'})
  })
  .catch(err => {
    res.send({message:err.detail})
  })
})


app.listen(3000)

