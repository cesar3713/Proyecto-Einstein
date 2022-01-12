/*Renglones del parrafo animado : */ 
const textV1 = document.querySelector(".text1");
const textV2 = document.querySelector(".text2");
const textV3 = document.querySelector(".text3");
const textV4 = document.querySelector(".text4");
const textV5 = document.querySelector(".text5");
const textV6 = document.querySelector(".text6");
const textV7 = document.querySelector(".text7");
const textV8 = document.querySelector(".text8");

/*Agregando span entre las letras */
textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
textV7.innerHTML = textV7.textContent.replace(/\S/g , "<span>$&</span>");
textV8.innerHTML = textV8.textContent.replace(/\S/g , "<span>$&</span>");

///////////////////////////////////////////////////////////////////////////////

/////////////////////////// Animaciones/////////////////////////// 
/*Animacione usando funcion de anime.min.js :*/

const animationGral = anime.timeline({
    targets : [".text1 span",".text2 span",".text3 span",".text4 span",".text5 span",".text6 span",".text7 span",".text8 span"],
    easing : "linear",
    loop : false,
})
        
animationGral

    /*Disposicion inicial de las letras (es decir el comienzo de la animacion total)*/ 
    .add({
        rotate : function(){
            return anime.random(-0,0)
        },
        translateX : function(){
            return anime.random(-500,800)
        },
        translateY : function(){
            return anime.random(-500,500)
        },
        duration : 0,
        delay: anime.stagger(0, {start: 0}), //start original: 0//
        color : "rgb(22, 22, 22,0)",
               
    })

    /*Caracteristicas del ordenamieno de las letras en la animacion */
    .add({
        rotate : 0,
        translateX: 0,
        translateY: 0,
        duration : 5000,
        color : "rgb(22, 22, 22)",
        delay : anime.stagger(100, {start: 000}), 
    })