const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');

// Fancy listener function
const app = express();

// Chain of middlewares
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(morgan('combined'));
// app.use;
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(planetsRouter);
app.get('/', (req, res) => {
  req.sendFile(path.join(__dirname, '..', 'public/index.html'));
});
module.exports = app;
