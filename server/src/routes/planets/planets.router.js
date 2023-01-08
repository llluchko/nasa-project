const express = require('express');
const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);

// Router is another type of middleware that groups together related routes

module.exports = planetsRouter;
