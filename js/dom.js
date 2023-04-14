/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);
const newE = tag => document.createElement(tag)



const addCities = (cities) => {

    const location = $("#location")

    cities.forEach(city => {
        const div = newE("div")
        div.innerHTML = `
        <a class="p-3 m-0 cursor-text btn user-select-none" type="button" id="${city}" hrfe:"#${city}">${city}</a>
        `; 
        location.appendChild(div)
    });

}


export default {
  $,
  addCities,
};