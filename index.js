const express= require('express')
const setUpDB=require('./config/database')
const router= require('./config/routes')
const cors = require('cors')
const app= express()
const port=3080

app.use(express.json())
app.use(cors())
app.use('/',router)
setUpDB()

app.listen(port,()=>{
    console.log('Listening on port ',port)
})