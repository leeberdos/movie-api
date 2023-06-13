const movies = require('../movies')

// return all movies
const getAllMovies = (req, res) => {
  return res.send(movies)
}

// return movie by title
const getMovieByTitle = (req, res) => {
  const { title } = req.params
  const foundMovie = movies.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()) || movie.directors.find(director => (director.toLowerCase().includes(title.toLowerCase()))))

  return res.send(foundMovie)
}



// post new moive
const saveNewMovie = (req, res) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = req.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return res.status(400).send('The following fields are required: title, directors, release date, rating, run time, and genre')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return res.status(201).send(newMovie)
}

module.exports = {
  getAllMovies,
  getMovieByTitle,
  saveNewMovie
}
