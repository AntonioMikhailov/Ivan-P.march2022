
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');

  while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
  }

}
start();

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false,
};


function rememberFilms() {
  //Задаем два раза вопросы урок 14
for(let i = 0; i<2; i++) {
  let movieName = prompt('Один из последних просмотренных фильмов?');
  let rateMovie = +prompt('На сколько вы оцениете его?');
if(movieName != null && movieName != '' && rateMovie  != null && rateMovie != '' && movieName.length <15) {
  personalMovieDB.movies[movieName] = rateMovie;
} else {
  i--;
}
}
}
// rememberFilms();

function detectPersonalLevel() {
 if(personalMovieDB.count <10) {
  console.log('Просмотрено меньше 10 кино');
} else if (personalMovieDB.count >10 && personalMovieDB.count <30) {
  console.log(`Просмотрено от 10 до 30 кино - а именно ${numberOfFilms}`); 
}
  else if (personalMovieDB.count >30) {
console.log('Вы киноман!');
} else {
  console.log('Ошибка');
}
}
// detectPersonalLevel();

function showMyDB(private) {
  if(private == false) {
    console.log(personalMovieDB);
  } else {
    // если true - то не показываем
    console.log('Объект закрыт для показа');
  }
  }
// showMyDB(personalMovieDB.private);

function writeGenres() {
  // let num = 1;
  for(let i=1; i<4; i++) {
    //можно через push
    // personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    // или просто через индекс [i-1]
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
  
}
writeGenres();

console.log(personalMovieDB);