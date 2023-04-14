import data from "./data.js";
import dom from "./dom.js";


const datos = await data.getData()
const cities = data.getCity(datos)

dom.addCities(cities)

console.log(cities)