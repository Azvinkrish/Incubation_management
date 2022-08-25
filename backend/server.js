const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const app = express() 
const connectDB =require('./config/db')


connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false }))
app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/users',require('./routes/usersRoutes'))
app.use(errorHandler)

app.listen(port, ()=> console.log(`server started on port: ${port}`))
