"use strict"

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Який останній фільм ви дивились?', ''),
          b = prompt('Як ви його оціните', '');

          personalMovieDB.movies[a] = b;
}



console.log(personalMovieDB);