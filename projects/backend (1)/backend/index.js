
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const AuthRouter=require('./route/route')
const app=express()
app.use(express.json())
app.use(cors())
require('dotenv').config();  // it is must for using env

app.use('/auth',AuthRouter)

mongoose.connect(process.env.dbUrl).then(()=>
{console.log("CONNECTED TO MONGODB",process.env.PORT)
 app.listen(process.env.PORT)
}).catch(()=>{
    console.log("NOT CONNECTED")
})