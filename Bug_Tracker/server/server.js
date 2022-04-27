const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const userRoutes = require("./routes/user.routes")
const bugRoutes = require("./routes/bug.routes")
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
const { User } = require("./models/user.model")
const { Bug } = require("./models/bug.model")
const bcrypt = require('bcryptjs');

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json())


require('./config/mongoose.config')

userRoutes(app)
bugRoutes(app)






app.listen(port, ( ) => console.log(`Express server running on ${port}`) )