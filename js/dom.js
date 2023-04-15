/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);
const newE = (tag) => document.createElement(tag);
const places = $("#container");

const addCities = (cities) => {
  const location = $("#location");

  cities.forEach((city) => {
    const div = newE("div");
    div.innerHTML = `
        <a class="p-3 m-0 cursor-text btn user-select-none" type="button" id="${city}" hrfe:"#${city}">${city}</a>
        `;
    location.appendChild(div);
  });
};

const generateCard = (card) => {
  const div = newE("div");
  div.className = "card border border-0";
  div.innerHTML = `
  <div class="img card-img-modified">
    <img class="w-100 rounded-4" src="${card.photo}" alt="${card.title}">
  </div>
  <div class=" card-body d-flex justify-content-between">
    
    <p class="d-flex flex-column">
      <span class="text-body-secondary">${
        card.superHost ? `${card.type} ${card.beds ? ` . ${card.beds} beds`: ""}` : card.type
      }</span>
    </p>
    <p>
      <span class="fw-semibold">${card.title}</span>
    </p>
  </div>
  `;
  return div;
};

const isSuperHost = (card) => {
  
}

const manifesCard = (card) => {
  places.innerHTML = "";
  card.forEach((element) => {
    const cards = generateCard(element);

    places.appendChild(cards);
  });
};

export default {
  $,
  addCities,
  generateCard,
  manifesCard,
};
