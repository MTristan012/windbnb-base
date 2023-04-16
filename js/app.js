import data from "./data.js";
import dom from "./dom.js";


const datos = await data.getData()
const cities = data.getCity(datos)
document.getElementById("floatingSelectGrid");
const cardList = [...dom.$("#container").children];
let cardActive = 0

dom.addCities(cities, datos)
/*dom.addCitiesB(cities, datos)*/
dom.manifesCard(datos)

console.log(cities)

cardList.forEach((categorie, index) => {
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

})