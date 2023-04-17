import data from "./data.js";
import dom from "./dom.js";


const datos = await data.getData()
const cities = data.getCity(datos)
/*const cardList = [...dom.$("#container").children];
let cardActive = 0*/

dom.offCanvas();
dom.manifesCard(datos)
data.adultGuest(dom);
data.childGuest(dom);
dom.addCities(cities, datos);
dom.locationSelected(dom, datos)

/*cardList.forEach((categorie, index) => {
    categorie.addEventListener("click", () => {
        if(categorie.classList.contains("act-categorie")) return
        
        categorie.classList.add("act-categorie")

        let old = cardList[cardActive];

        old.classList.remove("act-categorie")

        cardActive = index;

        let filtro = categorie.textContent

        const filtered = filtro === "All" ? datos : data.filtrar(datos, filtro)

        dom.manifesCard(filtered)
    })

})*/
