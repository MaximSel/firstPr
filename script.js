let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const nameUserFilm1 = prompt("Один из последних просмотренных фильмов?"),
      ratingUser1 = +prompt("Оценка"),
      nameUserFilm2 = prompt("Еще один из последних просмотренных фильмов?"),
      ratingUser2 = +prompt("Оценка");
personalMovieDB.movies[nameUserFilm1] = ratingUser1;
personalMovieDB.movies[nameUserFilm2] = ratingUser2;

console.log(personalMovieDB);

