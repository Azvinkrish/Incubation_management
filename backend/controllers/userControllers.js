const asyncHandler = require('express-async-handler')

//@desc  Get user
//route  get:/api/user
//access private

const getUser = asyncHandler(async (req,res) => {
    res.status(200).json({message:'get user'})
})


//@desc  Post user
//route  post:/api/user
//access private

const setUsers =  asyncHandler(async(req,res) => {
   if (!req.body.text){
    res.status(400)
    throw new Error('Please enter text')
   }
    res.status(200).json({message:'post user'})
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
