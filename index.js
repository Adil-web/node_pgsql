const express = require('express')
const userRouter = require('./router/user.router')
const PORT = process.env.port || 8080
const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))