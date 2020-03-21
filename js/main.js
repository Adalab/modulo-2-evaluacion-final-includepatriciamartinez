'use-strict';

//VARIABLES SOLO DE JS
let tvShows = [];
let favShows = [];

// VARIABLES DE JS Y HTML
const showsEl = document.querySelector('.js-tvShowDataList');

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

const getHTMLShows = function(data) {
  let accHTML = ''; // es vacío para que se reinicie cada vez que pase por aquí.
  accHTML += `<li class="js-tvShowDataItem1">`;
  accHTML += `<img src=${data.show.image.medium} class="js-ShowDataImage" alt="Carátula de ${data.show.name}" />`;
  accHTML += `<h3 class="js-tvShowdataTitle">${data.show.name}</h3>`;
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

const paintFavShows = function() {
  // patri tienes que rellenar esta función
};

// ARRANCAMOS LA PÁGINA
getApiData();
