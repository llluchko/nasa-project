const express = require('express')

const planetsRouter = express.Router()

planetsRouter.get('/planets', getAllPlanets)

// Router is another type of middleware that groups together related routes

module.exports = planetsRouter;