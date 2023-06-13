const express = require('express')
const { getAllMovies, getMovieByTitle, saveNewMovie } = require('./controller/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/')

app.get('/movies/:title', getMovieByTitle)

app.post('/movies/', express.json(), saveNewMovie)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
