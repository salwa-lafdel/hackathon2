const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;


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

function createUser({nom, prenom, tele, email, password}){
   const salt = bcrypt.genSaltSync(saltRounds);
  return db('signup').insert(
    {
      nom:nom,
      prenom:prenom,
      tele:tele,
      email:email,
      password:bcrypt.hashSync(password, salt),
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}
