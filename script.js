// let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');

let personalMovieDB = {
// count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false,
};

//Задаем два раза вопросы
for(let i = 0; i<2; i++) {
  let firstQuestion = prompt('Один из последних просмотренных фильмов?');
  // let secondQuestion = +prompt('На сколько вы оцениете его?');
if(!firstQuestion || firstQuestion.length >= 5) {
  firstQuestion = prompt('Один из последних просмотренных фильмов?');
} else {
  
  // personalMovieDB.movies[firstQuestion] = secondQuestion;
}
}
// let firstQuestion; 
// let secondQuestion;
// for(let i = 0; i<2; i++) {
//   do {
//     firstQuestion = prompt('Один из последних просмотренных фильмов?');
//     secondQuestion = +prompt('На сколько вы оцениете его?');
//     personalMovieDB.movies[firstQuestion] = secondQuestion;
//   } while(!firstQuestion || firstQuestion.length >5);
  
//   console.log(personalMovieDB); // movies: {Термик: '6', Кодзилла: '5'}

// }




//  let firstQuestion = prompt('Один из последних просмотренных фильмов?');
// if(!firstQuestion || firstQuestion.length >= 5) {
//   firstQuestion = prompt('Один из последних просмотренных фильмов?');
// }
// console.log( firstQuestion.length);