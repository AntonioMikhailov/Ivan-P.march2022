// let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');ё

let personalMovieDB = {
// count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false,
};

//Задаем два раза вопросы

  let firstQuestion = prompt('Один из последних просмотренных фильмов?');
  let secondQuestion = +prompt('На сколько вы оцениете его?');
  personalMovieDB.movies.firstQuestion = secondQuestion; // без квадратных скобок запишет
  // идентификатор как firstQuestion а не как данные из Prompt


console.log(personalMovieDB); // movies: {Термик: '6', Кодзилла: '5'}

// var country = {
 
//   name: "Германия",
//   language: "немецкий",
//   capital:{
   
//       name: "Берлин",
//       population: 3375000,
//       year: 1237
//   }
// };
// console.log("Столица: " + country.capital.name); // Берлин
// console.log("Население: " + country["capital"]["population"]); // 3375000
// console.log("Год основания: " + country.capital["year"]); // 1237

// country.capital.cars = 123; // добавили свойство во вложенный объект
// console.log(country.capital); // {name: 'Берлин', population: 3375000, year: 1237, cars: 123}