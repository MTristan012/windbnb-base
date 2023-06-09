/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);
const newE = (tag) => document.createElement(tag);
const places = $("#container");

const generateCard = (card) => {
  const div = newE("div");
  div.className = "card border border-0 mt-4";
  div.innerHTML = `
  <div class="img card-img-modified">
    <img class="w-100 rounded-4 object-fit-cover" style="height: 16rem;" src="${
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
        <span class="text-body-secondary p-2">
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
  div.className = "container";
  div.innerHTML = `
    <form class=" align-items-center div_0">
      <!-- Nota -->
      <div class="col-md-12 div_1">
        <div class="btn form-floating border border-1 col-12 col-md-12 div_1_1" data-bs-toggle="collapse" href="#location" role="button" aria-expanded="false" aria-controls="location">
          <p type="label" class="text-start m-0" for="">Location</p>
          <input class="border border-0 fs-6 justify-content-md-start" value="Add Location" id="offCanvasLocation" disabled>
          </input>
        </div>
        <div class="btn form-floating rounded-sm-bottom border border-1 col-12 col-md-12 div_1_2" data-bs-toggle="collapse" href="#guests" role="button" aria-expanded="false" aria-controls="guests">
          <p type="label" class="text-start m-0" for="">Guests</p>
          <input class="border border-0 fs-6" value="Add Guests" id="offCanvasGuests" disabled>
          </input> 
        </div>
      </div>
      <!-- Nota -->
      <div class="row div_2">
        <div class="col p-2">
          <div class="collapse multi-collapse" id="location">
          </div>
        </div>
        <div class="col p-2">
          <div class="collapse multi-collapse" id="guests">
            <div class="">
              <p class="d-flex flex-column">
                <span class="fw-semibold">Adults</span>
                <span class="text-body-secondary">Ages 13 or above</span>
              </p>
              <div class="grid d-flex align-items-center">
                <span class="minus border col-1 d-flex justify-content-center" role="button" id="adultMinus">-</span>
                <input class="border border-0 text-center col-2" placeholder="0" type="text" value="0" id="adults"/>
                <span class="plus border col-1 d-flex justify-content-center" role="button" id="adultPlus">+</span>
              </div>
            </div>
            <div class="mt-4">
              <p class="d-flex flex-column">
                <span class="fw-semibold">Children</span>
                <span class="text-body-secondary">Ages 2-12</span>
              </p>
              <div class="grid d-flex align-items-center">
                <span class="minus border col-1 d-flex justify-content-center" role="button" id="childMinus">-</span>
                <input class="border border-0 text-center col-2" placeholder="0" type="text" value="0" id="children"/>
                <span class="plus border col-1 d-flex justify-content-center" role="button" id="childPlus">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Nota -->
      <div class="d-flex justify-content-center col-md-12 p-md-1 div_3">
        <a class="btn btn-danger" href="#" type="submit" id="search" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="location guests" aria-label="Close">
        <!-- Icono Search de google Icons -->
          <span class="material-symbols-outlined pointer">
            search
          </span>
          <span>
            Search
          </span>
        </a>
      </div>
      <!-- Nota -->
    </form>
  `;
  offCanvasBody.appendChild(div);
};

const addCities = (cities, data) => {
  const location = $("#location");
  let a = 1
  cities.forEach((city) => {
    const div = newE("div");
    div.innerHTML = `
        <a value="${a++}" class="p-1 m-0 cursor-text btn user-select-none d-flex align-items-center" type="button" id="${city}" hrfe:"#${city}">
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

const allFilter = (dom,datos) => {
  const helsinki = dom.$("#Helsinki");
  const oulu = dom.$("#Oulu");
  const turku = dom.$("#Turku");
  const vaasa = dom.$("#Vaasa");
  const place = dom.$("#place");
  const placeA = dom.$("#placeA")
  const stays = dom.$("#stays");
  const adultMinus = dom.$("#adultMinus");
  const adultPlus = dom.$("#adultPlus");
  const adults = dom.$("#adults");
  const childMinus = dom.$("#childMinus");
  const childPlus = dom.$("#childPlus");
  const children = dom.$("#children");
  const guestsB = dom.$("#guestsB")
  const offCanvasLocation = dom.$("#offCanvasLocation")
  const offCanvasGuests = dom.$("#offCanvasGuests");
  let town

  helsinki.addEventListener("click", function () {
    town = helsinki.id;
    place.innerHTML = town;
    placeA.className = "text-black";
    placeA.innerHTML = `${town}, Finlad`;
    let filter = datos.filter((ciudad) => ciudad.city == town);
    stays.innerHTML = `${filter.length}+`;
    dom.manifesCard(filter);
    guestsB.className = "text-body-tertiary";
    guestsB.innerHTML = "Add Guests";
    offCanvasLocation.value = `${town}, Finlad`;
  });

  oulu.addEventListener("click", function () {
    town = oulu.id;
    place.innerHTML = town;
    placeA.className = "text-black";
    placeA.innerHTML = `${town}, Finlad`;
    let filter = datos.filter((ciudad) => ciudad.city == town);
    stays.innerHTML = `${filter.length}+`;
    dom.manifesCard(filter);
    guestsB.className = "text-body-tertiary";
    guestsB.innerHTML = "Add Guests";
    offCanvasLocation.value = `${town}, Finlad`;
  });

  turku.addEventListener("click", function () {
    town = turku.id;
    place.innerHTML = town;
    placeA.className = "text-black";
    placeA.innerHTML = `${town}, Finlad`;
    let filter = datos.filter((ciudad) => ciudad.city == town);
    stays.innerHTML = `${filter.length}+`;
    dom.manifesCard(filter);
    guestsB.className = "text-body-tertiary";
    guestsB.innerHTML = "Add Guests";
    offCanvasLocation.value = `${town}, Finlad`;
  });

  vaasa.addEventListener("click", function () {
    town = vaasa.id;
    place.innerHTML = town;
    placeA.className = "text-black";
    placeA.innerHTML = `${town}, Finlad`;
    let filter = datos.filter((ciudad) => ciudad.city == town);
    stays.innerHTML = `${filter.length}+`;
    dom.manifesCard(filter);
    guestsB.className = "text-body-tertiary";
    guestsB.innerHTML = "Add Guests";
    offCanvasLocation.value = `${town}, Finlad`;
  });

  adultMinus.addEventListener("click", function () {
    if (adults.value > 0) {
      adults.value = parseInt(adults.value) - 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
    placeA.className = "text-body-tertiary";
    placeA.innerHTML = "Add Location";
    guestsB.className = "text-black";
    guestsB.innerHTML = `
    ${guests} guests
    `
    place.innerHTML = "Finland";
    stays.innerHTML = `${filter.length}+`;
    offCanvasGuests.value = `
    ${guests} guests
    `;
  });

  adultPlus.addEventListener("click", function () {
    if (adults.value < 10 - parseInt(children.value)) {
      adults.value = parseInt(adults.value) + 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
    placeA.className = "text-body-tertiary";
    placeA.innerHTML = "Add Location";
    guestsB.className = "text-black";
    guestsB.innerHTML = `
    ${guests} guests
    `;
    place.innerHTML = "Finland";
    stays.innerHTML = `${filter.length}+`;
    offCanvasGuests.value = `
    ${guests} guests
    `;
  });

  childMinus.addEventListener("click", function () {
    if (children.value > 0) {
      children.value = parseInt(children.value) - 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
    placeA.className = "text-body-tertiary";
    place.AinnerHTML = "Add Location";
    guestsB.className = "text-black";
    guestsB.innerHTML = `
    ${guests} guests
    `;
    place.innerHTML = "Finland";
    stays.innerHTML = `${filter.length}+`;
    offCanvasGuests.value = `
    ${guests} guests
    `;
  });

  childPlus.addEventListener("click", function () {
    if (children.value < 10 - parseInt(adults.value)) {
      children.value = parseInt(children.value) + 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
    placeA.className = "text-body-tertiary";
    placeA.innerHTML = "Add Location";
    guestsB.className = "text-black";
    guestsB.innerHTML = `
    ${guests} guests
    `;
    place.innerHTML = "Finland";
    stays.innerHTML = `${filter.length}+`;
    offCanvasGuests.value = `
    ${guests} guests
    `;
  });
  
};

const specificFilter = (dom,datos) => {
  const adults = dom.$("#adults");
  const children = dom.$("#children");
  const offCanvasLocation = dom.$("#offCanvasLocation");
  const search = dom.$("#search");
  const place = dom.$("#place");
  const placeA = dom.$("#placeA");
  const guestsB = dom.$("#guestsB");
  const stays = dom.$("#stays");
  

  search.addEventListener("click", function(){
    let guests = parseInt(adults.value) + parseInt(children.value);
    let location = offCanvasLocation.value.split(" ")
    let placeSelected = location[0].slice(0,-1)
    let filter = datos.filter(
      (filtrado) =>
        filtrado.city == placeSelected && filtrado.maxGuests >= guests
    );
    dom.manifesCard(filter);
    stays.innerHTML = `${filter.length}+`;
    placeA.className = "text-black";
    console.log(placeSelected);
    if ((guests == 0)&&(offCanvasLocation.value == "Add Location")){
      place.innerHTML = "Finland";
      placeA.innerHTML = `Finlad`;
    }else{
      place.innerHTML = placeSelected;
      placeA.innerHTML = `${placeSelected}, Finlad`;
    }
    guestsB.className = "text-black";
    guestsB.innerHTML = `
    ${guests} guests
    `;
  })
  

}

export default {
  $,
  addCities,
  generateCard,
  manifesCard,
  offCanvas,
  allFilter,
  specificFilter,
};
