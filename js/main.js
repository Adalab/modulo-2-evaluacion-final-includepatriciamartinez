'use-strict';

console.log('hola mundo');

//VARIABLES
let tvShows = [];
const showsEl = document.querySelector('.js-input').value;
console.log(showsEl);

//FUNCIONES
//Me traigo la API
const getApiData = function () {

  fetch('http://api.tvmaze.com/search/shows?q=fleabag') //aquí meto url de api que está especificada en documentación según me espefique en ella.
    .then(response => response.json())
    .then(show => {
      tvShows = show;
      console.log(show);
      // products = data.cart.items;
      //console.log(products);
      //paintProduct(); //ejecutamos aquí paint products porque es donde se ha generado el array products. y lo pongo debajo del console.log por la asincronía.

      //console.log(data.cart.items); es para comprobar que me funciona y cómo recibo la info.
    });

};

const getHTMLShows = function (show) {
  let accHTML = ''; // es vacío para que se reinicie cada vez que pase por aquí.
  accHTML += `<ul class="card">`;
  accHTML += `<img src=${show.image} class="card__img" alt="Camiseta de ${show.name}" />`;
  accHTML += `<h3 class="card__title">${show.name}</h3>`;
  accHTML += `<button id=${product.id} class="js-btn card__btn">Añadir a la cesta</button>`;
  accHTML += `</article>`;
  return accHTML; //ojo que no se te olvide el return porque sino no te lo pinta.
}


const paintTvShows = function (tvShow) {
  let accTvShow = '';
  for (let index = 0; index < tvShows.length; index++) {
    accTvShow += getHTMLShow(tvShows[index]);
  }
  showsEl.innerHTML.value = accTvShow;
  //listenBtn();
}








//EJECUTAMOS
getApiData();