/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);
const newE = (tag) => document.createElement(tag);
const places = $("#container");

const generateCard = (card) => {
  const div = newE("div");
  div.className = "card border border-0";
  div.innerHTML = `
  <div class="img card-img-modified">
    <img class="w-100 rounded-4" style="height: 16rem;" src="${
      card.photo
    }" alt="${card.title}">
  </div>
  <div class="card-body justify-content-between lh-lg">
    <div class="d-flex justify-content-between">
      <div>
        ${
          card.superHost
            ? `
              <span class="border border-light-subtle rounded-pill fw-semibold text-body-secondary p-1" style="font-size:0.9rem text-center">
                SUPER HOST
              </span>
              `
            : ""
        }
        <span class="text-body-secondary">
        ${
          card.superHost
            ? `${card.type} ${card.beds ? ` . ${card.beds} beds` : ""}`
            : card.type
        }
        </span>
      </div>
      <div class="d-flex align-items-center">
        <span class="material-icons text-danger">
          star
        </span>
        <span>
          ${card.rating}
        </span>
      </div>
    </div>
    <div class="d-flex justify-content-start">
      <span class="fw-semibold">${card.title}</span>
    </div>
  </div>
  `;
  return div;
};

const offCanvas = () => {
  const offCanvasBody = $("#offCanvasBody");
  const div = newE("div");
  div.innerHTML = `
    <div class="g-col-12">
      <div class="row mb-3">
        <div class="col">
          <a class="btn" data-bs-toggle="collapse" href="#location" role="button" aria-expanded="false"
            aria-controls="location">Location</a>
        </div>
        <div class="col">
          <a class="btn" data-bs-toggle="collapse" href="#guests" role="button" aria-expanded="false"
          aria-controls="guests">Guest</a>
        </div>
        <div class="col">
          <a class="btn" href="#" type="submit">
          <!-- Icono Search de google Icons -->
            <span class="material-symbols-outlined text-danger p-3 pointer">
              search
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="location">
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="guests">
          <div>
            <span>Adults</span>
            <span>Ages 13 or above</span>
            <div>
              <span class="minus" role="button" id="adultMinus">-</span>
              <input placeholder="0" type="text" value="0" id="adults"/>
              <span class="plus" role="button" id="adultPlus">+</span>
            </div>
          </div>
          <div>
            <span>Children</span>
            <span>Ages 2-12</span>
            <div>
              <span class="minus" role="button" id="childMinus">-</span>
              <input placeholder="0" type="text" value="0" id="children"/>
              <span class="plus" role="button" id="childPlus">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  offCanvasBody.appendChild(div);
};

const addCities = (cities, data) => {
  const location = $("#location");
  cities.forEach((city) => {
    const div = newE("div");
    div.innerHTML = `
        <a class="p-3 m-0 cursor-text btn user-select-none d-flex align-items-center" type="button" id="${city}" hrfe:"#${city}">
          <span class="material-icons">
            location_on
          </span>
          <span>
            ${city}, ${data[0].country}
          <span>
        </a>
        `;
    location.appendChild(div);
  });
};

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
  offCanvas,
};
