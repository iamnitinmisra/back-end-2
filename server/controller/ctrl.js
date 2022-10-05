const movies = require("../db.json");
let id = 11;

module.exports = {
  getAllMovies: (req, res) => {
    res.status(200).send(movies);
  },
  deleteMovie: (req, res) => {
    const { id } = req.params;

    const index = movies.findIndex((movie) => {
      return movie.id === +id;
    });

    if (index === -1) {
      res.status(400).send("Unable to find the movie");
    } else {
      movies.splice(index, 1);
      res.status(200).send(movies);
    }
  },
  createMovie: (req, res) => {
    let { title, rating, imageURL } = req.body;

    const newMovie = { id, title, rating, imageURL };

    movies.push(newMovie);
    id++;

    res.status(200).send(movies);
  },
  updateRating: (req, res) => {
    let { type } = req.body;
    let { id } = req.params;

    const index = movies.findIndex((movie) => {
      return movie.id === +id;
    });

    if (type === "plus" && movies[index].rating <= 4) {
      movies[index].rating++;
      res.status(200).send(movies);
    } else if (type === "minus" && movies[index].rating > 1) {
      movies[index].rating--;
      res.status(200).send(movies);
    } else {
      res.status(400).send("Something went wrong");
    }
  },
};
