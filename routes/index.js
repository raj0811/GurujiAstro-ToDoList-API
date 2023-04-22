const express = require('express')
const app = express();
const router = express.Router()
const passport = require('passport')
const userController = require('../controllers/home_controller')



router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/loginjwt', userController.loginjwt)


router.use('/tasks', require('./task'))



module.exports = router;