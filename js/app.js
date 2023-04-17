import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData()
const cities = data.getCity(datos)

dom.offCanvas();
dom.manifesCard(datos)
data.addGuest(dom);
dom.addCities(cities, datos);
dom.locationSelected(dom, datos)

