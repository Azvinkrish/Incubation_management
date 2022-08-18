const express = require('express')
const router = express.Router()

const {getUser, setUsers, updateUsers, deleteUsers} = require('../controllers/userControllers')

router.route('/').get(getUser).post(setUsers)
router.route('/:id').put(updateUsers).delete(deleteUsers)   


module.exports = router
