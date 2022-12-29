const express=require("express")
const mongoose=require("mongoose")
const route=require("./route/route")
const app=express()
mongoose.set('strictQuery', false)

app.use(express.json())

mongoose.connect("mongodb+srv://sourabh1392:lkPLEVKUMFYJwi89@cluster0.khsb1mt.mongodb.net/customerCard",{
    useNewUrlParser:true
})
.then(()=>console.log("mongoDB is connected"))
.catch(error=>console.log(error.message))

app.use("/",route)

app.listen(3000,()=>{
    console.log("Express app running on port 3000")
})