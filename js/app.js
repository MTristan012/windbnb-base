import data from "./data.js";
import dom from "./dom.js";


const datos = await data.getData()
const cities = data.getCity(datos)
const adultMinus = dom.$("#adultMinus")
const adultPlus = dom.$("#adultPlus");
const childMinus = dom.$("#childMinus");
const childPlus = dom.$("#childPlus");
const adults = dom.$("#adults")
const children = dom.$("#children")
const cardList = [...dom.$("#container").children];
let cardActive = 0

dom.addCities(cities, datos)
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

adultMinus.addEventListener("click", function(){
    if (adults.value > 0) {
        adults.value = parseInt(adults.value) - 1
  }
})

adultPlus.addEventListener("click", function(){
  adults.value = parseInt(adults.value) + 1;
});

childMinus.addEventListener("click", function () {
  if (children.value > 0) {
    children.value = parseInt(children.value) - 1;
  }
});

childPlus.addEventListener("click", function () {
  children.value = parseInt(children.value) + 1;
});