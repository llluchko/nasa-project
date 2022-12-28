const express = require('express')

const planetsRouter = require('./routes/planets/planets.router')

// Fancy listener function 
const app = express()

// Chain of middlewares
app.use(express.json())
app.use(planetsRouter)

module.exports = app