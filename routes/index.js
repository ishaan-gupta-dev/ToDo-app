const express = require('express');

// create router
const router = express.Router();

// create fetchTask controller
const fetchTaskController = require('../controllers/fetch_task_controller');

// get the home route fron fetchTaskController
router.get('/',fetchTaskController.fetchTask);

// create contact controller
const createTaskController = require('../controllers/create_task_controller');

// post/push the create-task route to create_task_controller 
router.post('/create-task',createTaskController.createTask);

// create deleteTask controller
const deleteTaskController = require('../controllers/delete_task_controller');

// post the delete route from deleteTaskController
router.post('/delete-task',deleteTaskController.deleteTask);

// export the router
module.exports = router;