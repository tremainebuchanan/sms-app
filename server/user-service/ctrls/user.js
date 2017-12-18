'use strict'
const knex = require('knex')(require('../knexfile'))
const shortid = require('shortid')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  auth,
  create,
  index
}

function auth(req, res){
  let request = req.body
  knex.select('ref_code', 'email', 'password')
      .where({'email': request.email})
      .from('users')
      .then((user)=>{
        if(user.length < 1)
          return res.status(401).json('Email/password incorrect')
        bcrypt.compare(request.password, user[0].password, (err, result)=>{
          if(!result || err) return res.status(401).json('Email/password incorrect')
          res.json('Authenticated')
        })
      })
}

function create(req, res){
  let user = req.body
  user.ref_code = shortid.generate()
  bcrypt.hash(user.password, saltRounds, (err, hashedPassword)=>{
    user.password = hashedPassword
    knex('users')
        .insert(user)
        .then(function(result){
          res.json(result)
        }).catch(function(err){
          console.log('Error')
        })
  })
}

function index (req, res){
    knex.select()
        .from('users')
        .then((users)=>{
          res.json(users)
      })
}
