let barraLateral = document.querySelector(".columna-navegacion")
let navigation = document.querySelector(".pag-Navegacion")
let menutoggle = document.querySelector(".toggle");
let pagResumen = document.querySelector(".pag-resumen");

    /*Hover en barra lateral y en menu hamburguesa*/

const mouseDentro = () => {
menutoggle.classList.add("hover-menu");
}
const mouseFuera = () => {
menutoggle.classList.remove("hover-menu");
}

barraLateral.addEventListener("mouseenter",mouseDentro);
barraLateral.addEventListener("mouseleave",mouseFuera);
menutoggle.addEventListener("mouseenter",mouseDentro);
menutoggle.addEventListener("mouseleave",mouseFuera);

    /*Funcion Menu hamburguesa*/

menutoggle.onclick = function(){
    menutoggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

barraLateral.onclick = function(){
    menutoggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

