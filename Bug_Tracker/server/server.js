const express = require("express")
const cors = require("cors")
const app = express()
const userRoutes = require("./routes/user.routes")
const bugRoutes = require("./routes/bug.routes")
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./config/mongoose.config')

userRoutes(app)
bugRoutes(app)

app.listen(port, ( ) => console.log(`Express server running on ${port}`) )