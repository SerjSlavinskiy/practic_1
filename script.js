"use strict"

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Який останній фільм ви дивились?', ''),
      b = prompt('Як ви його оціните', ''),
      c = prompt('Який останній фільм ви дивились?', ''),
      d = prompt('Як ви його оціните', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);