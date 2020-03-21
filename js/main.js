'use-strict';

//VARIABLES
let tvShows = [];
const showsEl = document.querySelector('.js-tvShowDataList');
//console.log(showsEl);

//FUNCIONES
//Me traigo la API
const getApiData = function () {

  fetch('http://api.tvmaze.com/search/shows?q=dexter') //aquí meto url de api que está especificada en documentación según me espefique en ella.
    .then(response => response.json())
    .then(data => {
      tvShows = data;
      console.log(data);
      paintTvShows();
      // products = data.cart.items;
      //console.log(products);
      //paintProduct(); //ejecutamos aquí paint products porque es donde se ha generado el array products. y lo pongo debajo del console.log por la asincronía.

      //console.log(data.cart.items); es para comprobar que me funciona y cómo recibo la info.
    });

};

const getHTMLShows = function (data) {
  let accHTML = ''; // es vacío para que se reinicie cada vez que pase por aquí.
  accHTML += `<li class="js-tvShowDataItem1">`;
  accHTML += `<img src=${data.show.image} class="js-ShowDataImage" alt="Carátula de ${data.show.name}" />`;
  accHTML += `<h3 class="js-tvShowdataTitle">${data.show.name}</h3>`;
  accHTML += `</li>`;
  return accHTML; //ojo que no se te olvide el return porque sino no te lo pinta.
}


const paintTvShows = function (tvShow) {
  let accTvShow = '';
  for (let index = 0; index < tvShows.length; index++) {
    accTvShow += getHTMLShows(tvShows[index]);
  }
  showsEl.value = accTvShow;
  //listenBtn();
}








//EJECUTAMOS
getApiData();