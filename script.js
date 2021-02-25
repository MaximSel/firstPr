let numberOfFilms;
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
rememberMyFilms();
detectLevelNoWorking();
writeYourGenres();
showMyDB(personalMovieDB.privat);

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const nameUserFilm = prompt("Один из последних просмотренных фильмов?"), 
              ratingUser = prompt("Оценка");
        if (nameUserFilm != "" && nameUserFilm.length < 50 && nameUserFilm != null && ratingUser != "" && ratingUser != null) {
            personalMovieDB.movies[nameUserFilm] = ratingUser;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }
    }    
}
function detectLevelNoWorking() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (10 < personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Да вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}