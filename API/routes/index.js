const express = require('express')
const router = express.Router()
const pasien = require('../controllers/pasien')

router.post('/pasien', pasien.createUser)


module.exports = router