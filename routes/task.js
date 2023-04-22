const express = require('express')
const app = express();
const router = express.Router()
const passport = require('passport')
const taskController = require('../controllers/task_Controller')


// basic Create, Update and Delete Routes
router.post('/createtask', taskController.createtask);
router.put('/:id/update', taskController.update)
router.delete('/:id/delete', taskController.delete)


router.get('/getTask', taskController.getTask)

router.get('/filter', taskController.filter)


router.get('/search', taskController.searched)



module.exports = router;