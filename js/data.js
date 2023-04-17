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

const addGuest = (dom) => {
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
  });
  
  adultPlus.addEventListener("click", function () {
    if (adults.value < 10){
      adults.value = parseInt(adults.value) + 1;
    }
  });

  childMinus.addEventListener("click", function () {
    if (children.value > 0) {
      children.value = parseInt(children.value) - 1;
    }
  });

  childPlus.addEventListener("click", function () {
    if (children.value < 10) {
      children.value = parseInt(children.value) + 1;
    }
  });
};


export default {
  getData,
  getCity,
  addGuest,
}