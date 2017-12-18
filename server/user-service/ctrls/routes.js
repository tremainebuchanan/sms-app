'use strict'
const express = require('express')
const router = express.Router()
const api = require('./user')

router.get('/', api.index)
router.post('/auth', api.auth)

module.exports = router;
