const asyncHandler = require('express-async-handler')

const User = require('../models/selectmodel')

//@desc  Get user
//route  get:/api/user
//access private

const getUser = asyncHandler(async (req,res) => {

    const goals = await User.find()
    res.status(200).json({goals})
})


//@desc  Post user
//route  post:/api/user
//access private

const setUsers =  asyncHandler(async(req,res) => {
   if (!req.body.text){
    res.status(400)
    throw new Error('Please enter text')
   }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json({goal})
})

//@desc  Update user
//route  Put :/api/user
//access private
 

const updateUsers = asyncHandler(async (req,res) => {
    res.status(200).json({message:'put user'})
})


//@desc  Get user
//route  get:/api/user
//access private

const deleteUsers = asyncHandler( async (req,res) => {
    res.status(200).json({message:'delete user'})
})


module.exports = {
    getUser,
    setUsers,
    updateUsers,
    deleteUsers
}
