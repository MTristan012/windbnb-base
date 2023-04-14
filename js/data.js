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

export default {
  getData,
  getCity,
}