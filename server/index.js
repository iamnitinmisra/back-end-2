const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/ctrl");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Endpoints
app.get(`/api/movies`, ctrl.getAllMovies);
app.delete(`/api/movies/:id`, ctrl.deleteMovie);
app.post(`/api/movies`, ctrl.createMovie);
app.put(`/api/movies/:id`, ctrl.updateRating);

SERVER_PORT = 4004;

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
);
