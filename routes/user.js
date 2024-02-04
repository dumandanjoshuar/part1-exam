const express = require('express')
const router = express.Router()

// Controller
const userController = require('../controllers/user')

// post method (register a user)
router.post('/register', userController.registerUser)

// get method (get all users)
router.get('/all', userController.getAllUsers)

// update method (update user)
router.put('/:userId', userController.updateUser)

// delete method (delete user)
router.delete('/:userId', userController.deleteUser)

module.exports = router