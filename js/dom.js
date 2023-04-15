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

    <div class="img card-img-modified">
      <img class="w-100 h-100 rounded-4" src="${card.photo}" alt="${card.title}">
    </div>
    <div class="info d-flex justify-content-between mt-3">
    <p class="d-flex flex-column">
      <span class="fw-bold">$${card.title}</span>
      <span>${card.beds}</span>
    </p>
    <a href="#" id="${card.id}" onClick="console.log(this.id)">
      <img class="click" src="./img/icons/bt_add_to_cart.svg" alt="add to cart">
    </a>
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