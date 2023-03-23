const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello world"
    })

})

app.listen(PORT, () => console.log(`server is runing in port ${PORT}`))