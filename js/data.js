/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)
    .catch(error => error);
  return data;
}

const getCity = (data) => {
  let cities = data.map(location => location.city)
  cities = new Set(cities.sort())
  return cities
}

const addGuest = (dom,datos) => {
  const adultMinus = dom.$("#adultMinus");
  const adultPlus = dom.$("#adultPlus");
  const adults = dom.$("#adults");
  const childMinus = dom.$("#childMinus");
  const childPlus = dom.$("#childPlus");
  const children = dom.$("#children");

  adultMinus.addEventListener("click", function () {
    if (adults.value > 0) {
      adults.value = parseInt(adults.value) - 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
  });

  adultPlus.addEventListener("click", function () {
    if (adults.value < 10 - parseInt(children.value)) {
      adults.value = parseInt(adults.value) + 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
  });

  childMinus.addEventListener("click", function () {
    if (children.value > 0) {
      children.value = parseInt(children.value) - 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
  });

  childPlus.addEventListener("click", function () {
    if (children.value < 10 - parseInt(adults.value)) {
      children.value = parseInt(children.value) + 1;
    }
    let guests = parseInt(adults.value) + parseInt(children.value);
    let filter = datos.filter((mGuests) => mGuests.maxGuests >= guests);
    dom.manifesCard(filter);
  });
};


export default {
  getData,
  getCity,
  addGuest,
}