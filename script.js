
// let numberOfFilms;

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start() {
    // Здесь ищем не numberOfFilms  а Count, let numberOfFilms - уже не нужна
    this.count = +prompt('Сколько фильмов Вы уже посмотрели?');
    while(this.count == null || this.count == '' || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов Вы уже посмотрели?');
    }
    console.log( this.count);
  },
  rememberFilms() {
    for(let i = 0; i<2; i++) {
      let movieName = prompt('Один из последних просмотренных фильмов?');
      let rateMovie = +prompt('На сколько вы оценивает его?');
    if(movieName != null && movieName != '' && rateMovie  != null && rateMovie != '' && movieName.length <15) {
      this.movies[movieName] = rateMovie;
    } else {
      i--;
    }
    }
  },
  detectPersonalLevel() {
    if(this.count <10) {
      console.log('Просмотрено меньше 10 кино');
    } else if (this.count >10 && this.count <30) {
      console.log(`Просмотрено от 10 до 30 кино - а именно ${this.count}`); 
    }
      else if (this.count >30) {
    console.log('Вы киноман!');
    } else {
      console.log('Ошибка');
    }
  },

  writeGenres() {
 // let num = 1;
 for(let i=1; i<4; i++) {
  this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);

  if(this.genres == null || this.genres == '') {
    i--;
  }
//   // Если например юзер должен ввести фильмы за один раз через запятую то применяем метод split 
// let gen = prompt(`Вашb любимые фильмы через запятую }`);
// this.genres = gen.split(',');
  // перевести строку в toLowerCase() - чтобы сортировка была верной
  
   
  }
    this.genres.forEach((item, index) => {
    console.log(`Любимый жанр №${index +1} это ${ item}` );
  });
  // console.log(personalMovieDB.genres);
 },
   toggleVisibleDB() {
     // если стоит в private false меняем на true и наоборот
   this.private ? this.private = false : this.private = true; 
   
  },
  showMyDB() {
    if(this.private == false) {
      console.log(personalMovieDB);
    } else {
      // если true - то не показываем
      console.log('Объект закрыт для показа');
    }
  },

  closeMovieDB() {
   // this.private = true; //меняем разрешение на показ
  }

  };

// personalMovieDB.start();
// personalMovieDB.rememberFilms();
// personalMovieDB.detectPersonalLevel();

personalMovieDB.writeGenres();

// personalMovieDB.closeMovieDB(); // закрываем для показа базу
// personalMovieDB.toggleVisibleDB();
// personalMovieDB.showMyDB();



