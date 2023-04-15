/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);
const newE = tag => document.createElement(tag)
const places = $("#container")


const addCities = (cities) => {

    const location = $("#location")

    cities.forEach(city => {
        const div = newE("div")
        div.innerHTML = `
        <a class="p-3 m-0 cursor-text btn user-select-none" type="button" id="${city}" hrfe:"#${city}">${city}</a>
        `; 
        location.appendChild(div)
    });

}

const generateCard = (card) =>{
  const div = newE("div")
  div.className = "card-img"

  div.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

  </div>

  `;
  return div
}

const manifesCard = (card) => {
  places.innerHTML = ""
  card.forEach( element => {
    const cards = generateCard(card)

    places.appendChild(cards)
  })
}

export default {
  $,
  addCities,
  generateCard,
  manifesCard,
};