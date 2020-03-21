'use-strict';

//VARIABLES SOLO DE JS
let tvShows = [];
let favShows = [];

// VARIABLES DE JS Y HTML
const showsEl = document.querySelector('.js-tvShowDataList');
const favShowsEl = document.querySelector('.js-favListItem');

//FUNCIONES
//Me traigo la API
const getApiData = function() {
  fetch('http://api.tvmaze.com/search/shows?q=dexter') //aquí meto url de api que está especificada en documentación según me espefique en ella.
    .then(response => response.json())
    .then(data => {
      tvShows = data;
      console.log(data); // es para comprobar que me funciona y cómo recibo la info
      paintTvShows(); // ejecutamos aquí paint products porque es donde se ha generado el array products. y lo pongo debajo del console.log por la asincronía.
      // las dos siguientes líneas son fake
      favShows = tvShows.slice(0, 2);
      paintFavShows();
    });
};

const getHTMLShows = function(serie) {
  let accHTML = '';
  // es vacío para que se reinicie cada vez que pase por aquí.
  accHTML += `<li class="js-tvShowDataItem1">`;
  accHTML += `<img src=${serie.show.image.medium} class="js-ShowDataImage" alt="Carátula de ${serie.show.name}" />`;
  accHTML += `<h3 class="js-tvShowdataTitle">${serie.show.name}</h3>`;
  accHTML += `</li>`;
  return accHTML; //ojo que no se te olvide el return porque sino no te lo pinta.
};

const paintTvShows = function() {
  let accTvShow = '';
  for (let index = 0; index < tvShows.length; index++) {
    accTvShow += getHTMLShows(tvShows[index]);
  }
  showsEl.innerHTML = accTvShow;
};

const getHTMLfavShows = function(serie) {
  let codeHTML = '';
  codeHTML += `<li class="js-favListItem1">`;
  codeHTML += `<h3 class="js-favListTitle">${serie.show.name}</h3>`;
  codeHTML += `</li>`;
  return codeHTML;
};

const paintFavShows = function() {
  let accFavTvShow = '';
  for (let index = 0; index < favShows.length; index++) {
    accFavTvShow += getHTMLfavShows(favShows[index]);
  }
  favShowsEl.innerHTML = accFavTvShow;
};

// ARRANCAMOS LA PÁGINA
getApiData();
