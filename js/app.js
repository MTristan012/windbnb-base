import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData()
const cities = data.getCity(datos)

dom.offCanvas();
dom.manifesCard(datos)
/*data.addGuest(dom,datos);*/
dom.addCities(cities, datos);
dom.allFilter(dom, datos)
dom.specificFilter(dom, datos);

