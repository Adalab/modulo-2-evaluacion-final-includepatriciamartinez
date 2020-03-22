'use-strict';

//VARIABLES SOLO DE JS
let tvShows = [];
let favShows = [];


// VARIABLES DE JS Y HTML
const showsEl = document.querySelector('.js-tvShowDataList');
const favShowsEl = document.querySelector('.js-favListItems');
const textShowEl = document.querySelector('.js-inputText');



//Me traigo la API
<<<<<<< HEAD
const getApiData = function () {
  const inputTextValue = parseInt(textShowEl.value);
  fetch('http://api.tvmaze.com/search/shows?q=' + inputTextValue) //aquí meto url de api que está especificada en documentación según me espefique en ella.
=======
const getApiData = function() {
  console.log('Me han clickado en Search');
  fetch('http://api.tvmaze.com/search/shows?q=') //aquí meto url de api que está especificada en documentación según me espefique en ella.
>>>>>>> 581b1e78e42bf7fa5a3be0f896bf80269c0c9f3a
    .then(response => response.json())
    .then(data => {
      tvShows = data;
      // console.log(data); // es para comprobar que me funciona y cómo recibo la info
      paintTvShows(); // ejecutamos aquí paint products porque es donde se ha generado el array products. y lo pongo debajo del console.log por la asincronía.
      // las dos siguientes líneas son fake
<<<<<<< HEAD
      paintFavShows();

    });
};

//función handler getApiData cuando clicko en Search:

const handlerClickGetApiData = function (event) {
  console.log('me han clickado y el evento es:', event);
  //declaro const input.value( ojo que sale string):
  //todo value de input sale como string a menos que sea de tipo numberparseInt para convertirlo.
}

const listenClickSearchBtn = function () {
  const btnSearchEl = document.querySelector('.js-btn');
  btnSearchEl.addEventListener('click', handlerClickGetApiData);
};






const getHTMLShows = function (serie) {
=======
      // paintFavShows();
    });
};

const getHTMLShows = function(serie) {
>>>>>>> 581b1e78e42bf7fa5a3be0f896bf80269c0c9f3a
  let accHTML = '';
  // es vacío para que se reinicie cada vez que pase por aquí.
  accHTML += `<li class="js-tvShowDataListItem">`;
  accHTML += `<img src=${serie.show.image.medium} class="js-ShowDataImage" alt="Carátula de ${serie.show.name}" />`;
  accHTML += `<h3>${serie.show.name}</h3>`;
  accHTML += `</li>`;
  return accHTML; //ojo que no se te olvide el return porque sino no te lo pinta.
};

const paintTvShows = function() {
  let accTvShow = '';
  for (let index = 0; index < tvShows.length; index++) {
    accTvShow += getHTMLShows(tvShows[index]);
  }
  showsEl.innerHTML = accTvShow;
  listenClickShowList();

};

//funcion handler shows:
const handlerShowsList = function(event) {
  console.log('me han clickado y el evento es:', event);
  console.log('me han clickado y el evento es:', event.currentTarget);
  // aquí estoy añadiendo la primera serie a favoritos de manera fake
  favShows.push(tvShows[1]);
  paintTvShows();
  paintFavShows();
  setInLocalStorage();
};

const listenClickShowList = function() {
  const showsListListenerEl = document.querySelectorAll('.js-tvShowDataListItem');
  // console.log('Cuántos LI he encontrado:', showsListListenerEl)
  for (let index = 0; index < showsListListenerEl.length; index++) {
    showsListListenerEl[index].addEventListener('click', handlerShowsList);
  }
};

const getHTMLfavShows = function(serie) {
  let codeHTML = '';
  codeHTML += `<li class="js-tvShowDataListFavItem">`;
  codeHTML += `<h3>${serie.show.name}</h3>`;
  codeHTML += `<img src=${serie.show.image.medium} class="js-ShowDataImage" alt="Carátula de ${serie.show.name}" />`;
  codeHTML += `</li>`;
  return codeHTML;
};

const paintFavShows = function() {
  let accFavTvShow = '';
  for (let index = 0; index < favShows.length; index++) {
    accFavTvShow += getHTMLfavShows(favShows[index]);
  }
  favShowsEl.innerHTML = accFavTvShow;
  listenClickFavList();
};

<<<<<<< HEAD
//funcion handler favShows:
const handlerFavList = function (event) {
=======
//funcion handler faShows:
const handlerFavList = function(event) {
>>>>>>> 581b1e78e42bf7fa5a3be0f896bf80269c0c9f3a
  console.log('me han clickado y el evento es:', event.currentTarget);
  // aquí estoy borrando la primera serie de favoritos de manera fake
  if (favShows.length) {
    favShows.splice(0, 1);
  }
  paintTvShows();
  paintFavShows();
  setInLocalStorage();
};

const listenClickFavList = function() {
  const favListListenerEl = document.querySelectorAll('.js-tvShowDataListFavItem');
  for (let index = 0; index < favListListenerEl.length; index++) {
    favListListenerEl[index].addEventListener('click', handlerFavList);
  }
};

//función local storage

const setInLocalStorage = function() {
  const stringifyFavShows = JSON.stringify(favShows);
  localStorage.setItem('favShows', stringifyFavShows);
};

const getFromLocalStorage = function() {
  const localStorageFavShows = localStorage.getItem('favShows');
  console.log(localStorageFavShows);
  if (localStorageFavShows != null) {
    favShows = JSON.parse(localStorageFavShows);
    paintFavShows();
  }
<<<<<<< HEAD
};

const setInLocalStorage = function () {
  const stringifyFavShows = JSON.stringify(favShows);
  localStorage.setItem('favShows', stringifyFavShows);
=======
>>>>>>> 581b1e78e42bf7fa5a3be0f896bf80269c0c9f3a
};

// ARRANCAMOS LA PÁGINA
<<<<<<< HEAD
getApiData();
getFromLocalStorage();
=======
// getApiData();
getFromLocalStorage();
// paintFavShows();
>>>>>>> 581b1e78e42bf7fa5a3be0f896bf80269c0c9f3a
