const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.listOfFilmTitles = function(listOfFilms){
  const filmTitles = listOfFilms.map((films) => {
    return films.title
  })
  return filmTitles
}

Cinema.prototype.findFilmByTitle = function(title){
return this.films.find((film) =>{
  return film.title === title
})
}

module.exports = Cinema;
