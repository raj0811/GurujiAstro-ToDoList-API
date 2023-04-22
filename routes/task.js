const express = require('express')
const app = express();
const router = express.Router()
const passport = require('passport')
const taskController = require('../controllers/task_Controller')


// basic Create, Update and Delete Routes
router.get('/getTask', taskController.getTask)
router.post('/createtask', taskController.createtask);
router.put('/:id/update', taskController.update)
router.delete('/:id/delete', taskController.delete)

// Advance Features
router.get('/filter', taskController.filter)
router.get('/search', taskController.searched)



module.exports = router;