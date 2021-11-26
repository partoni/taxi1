require('dotenv').config()
let exp =require('express')
const driversRouter = require('./roters/driversRouters')

const cors = require('./middleware/cors')

let app = exp()
const PORT = process.env.PORT
// app.use(cors)
app.use(exp.json())
app.use('/api',driversRouter)
app.listen(
    PORT,()=>console.log(`сервер на ${PORT}`)
    )