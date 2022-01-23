//////////////////////////Variables y Constantes de utilidad///////////////////////

/*Botones que activan las frases (Poseen un area lo suficientemente grande para que sea mas facil hacer click sobre ellos)*/ 
const botonFrase1 = document.querySelector(".botonFrase1"); 
const botonFrase2 = document.querySelector(".botonFrase2"); 
const botonFrase3 = document.querySelector(".botonFrase3"); 

/*Botones mas delgados (que mejoran la UI) que le comunican al usuario que cambio de frase seleccionada (Poseen menos area que sus respectivos divs padres)*/
const botonFrase1UI = document.querySelector(".botonFrase1-MostradoalUsuario"); 
const botonFrase2UI = document.querySelector(".botonFrase2-MostradoalUsuario"); 
const botonFrase3UI = document.querySelector(".botonFrase3-MostradoalUsuario"); 

/*Renglones del parrafo animado : */ 
const textV1 = document.querySelector(".text1");
const textV2 = document.querySelector(".text2");
const textV3 = document.querySelector(".text3");
const textV4 = document.querySelector(".text4");
const textV5 = document.querySelector(".text5");
const textV6 = document.querySelector(".text6");
const textV7 = document.querySelector(".text7");
const textV8 = document.querySelector(".text8");
const textV9 = document.querySelector(".text9");
const textV10 = document.querySelector(".text10");
const textV11 = document.querySelector(".text11");
const textV12 = document.querySelector(".text12");

/*Array con todos los renglones*/
const a = [textV1,textV2,textV3,textV4,textV5,textV6,textV7,textV8,textV9,textV10,textV11,textV12];

////////////////////////////Evento por defecto al iniciar el Sitio web///////////////////////////////

botonFrase1UI.style.backgroundColor = "rgba(0, 0, 0, 0.651)";
botonFrase2UI.style.backgroundColor = "rgba(0, 0, 0, 0)";
botonFrase3UI.style.backgroundColor = "rgba(0, 0, 0, 0)";

/*Propiedad CSS Line-Height (Interlineado)*/
for( let i = 0 ; i < 12 ; i++ ){
    a[i].style.lineHeight = 2.28;
}

/*Agregando contenido de la frase (texto) a cada renglon*/

textV1.innerHTML = textV1.textContent = '"Así es como nosotros, los mortales, nos hacemos';
textV2.innerHTML = textV2.textContent = "inmortales, transmitiendo el trabajo hecho por";
textV3.innerHTML = textV3.textContent = "todos. Si piensan en esto, encontrarán sentido";
textV4.innerHTML = textV4.textContent = "a la vida y a vuestros esfuerzos, y podrán";
textV5.innerHTML = textV5.textContent = "transmitir vuestras certeras convicciones a";
textV6.innerHTML = textV6.textContent = 'otros pueblos y otras épocas."';
textV7.innerHTML = textV7.textContent = "";
textV8.innerHTML = textV8.textContent = "";
textV9.innerHTML = textV9.textContent = "";
textV10.innerHTML = textV10.textContent = "";
textV11.innerHTML = textV11.textContent = "";
textV12.innerHTML = textV12.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';

/*Agregando span entre las letras */
textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
textV12.innerHTML = textV12.textContent.replace(/\S/g , "<span>$&</span>");

/////////////////////////// Animacion por defecto al entrar al Sitio web (es decir la animacion de la Frase 1)/////////////////////////// 
/*Animaciones usando funcion de anime.min.js :*/

const animationGral = anime.timeline({
    targets : [".text1 span",".text2 span",".text3 span",".text4 span",".text5 span",".text6 span",".text12 span"],
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

////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////Cambio al dar Click en Boton de Frase 1///////////////////////

botonFrase1.onclick = function(){

    botonFrase1UI.style.backgroundColor = "rgba(0, 0, 0, 0.651)";
    botonFrase2UI.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase3UI.style.backgroundColor = "rgba(0, 0, 0, 0)";

    /*Propiedad CSS Line-Height (Interlineado)*/
    for( let i = 0 ; i < 12 ; i++ ){
        a[i].style.lineHeight = 2.28;
    }

    /*Agregando contenido de la frase (texto) a cada renglon*/
    textV1.innerHTML = textV1.textContent = '"Así es como nosotros, los mortales, nos hacemos';
    textV2.innerHTML = textV2.textContent = "inmortales, transmitiendo el trabajo hecho por";
    textV3.innerHTML = textV3.textContent = "todos. Si piensan en esto, encontrarán sentido";
    textV4.innerHTML = textV4.textContent = "a la vida y a vuestros esfuerzos, y podrán";
    textV5.innerHTML = textV5.textContent = "transmitir vuestras certeras convicciones a";
    textV6.innerHTML = textV6.textContent = 'otros pueblos y otras épocas."';
    textV7.innerHTML = textV7.textContent = "";
    textV8.innerHTML = textV8.textContent = "";
    textV9.innerHTML = textV9.textContent = "";
    textV10.innerHTML = textV10.textContent = "";
    textV11.innerHTML = textV11.textContent = "";
    textV12.innerHTML = textV12.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';

    /*Agregando span entre las letras */
    textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
    textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
    textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
    textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
    textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
    textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
    textV12.innerHTML = textV12.textContent.replace(/\S/g , "<span>$&</span>");
    
    const animationGral = anime.timeline({
    targets : [".text1 span",".text2 span",".text3 span",".text4 span",".text5 span",".text6 span",".text12 span"],
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
}; 
    
/////////////////////////////Cambio al dar Click en Boton de Frase 2///////////////////////////

botonFrase2.onclick = function(){
    
    botonFrase1UI.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase2UI.style.backgroundColor = "rgba(0, 0, 0, 0.651)";
    botonFrase3UI.style.backgroundColor = "rgba(0, 0, 0, 0)";

    /*Propiedad CSS Line-Height (Interlineado)*/
    for( let i = 0 ; i < 12 ; i++ ){
        a[i].style.lineHeight = 1.31;
    }

    /*Agregando contenido de la frase (texto) a cada renglon*/
    textV1.innerHTML = textV1.textContent = '"Hay un contraste grotesco entre la capacidad y';
    textV2.innerHTML = textV2.textContent = "el rendimiento que se me atribuyen y lo que en";
    textV3.innerHTML = textV3.textContent = "realidad soy. La conciencia de tan extravagantes";
    textV4.innerHTML = textV4.textContent = "opiniones sería insoportable si no fuera que";
    textV5.innerHTML = textV5.textContent = "ellas mismas me dan un hermoso consuelo:";
    textV6.innerHTML = textV6.textContent = "regocija el que en una época tan acabadamente";
    textV7.innerHTML = textV7.textContent = "materialista se conviertan en héroes a hombres";
    textV8.innerHTML = textV8.textContent = "cuyos únicos objetivos están en lo intelectual";
    textV9.innerHTML = textV9.textContent = "y en lo moral. Eso demuestra que para una gran";
    textV10.innerHTML = textV10.textContent = "mayoría las nociones de Conocimiento y de";
    textV11.innerHTML = textV11.textContent = 'Justicia prevalecen sobre las de Poder y Posesión."';
    textV12.innerHTML = textV12.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';
                                           
    /*Agregando span entre las letras */
    textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
    textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
    textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
    textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
    textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
    textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
    textV7.innerHTML = textV7.textContent.replace(/\S/g , "<span>$&</span>");
    textV8.innerHTML = textV8.textContent.replace(/\S/g , "<span>$&</span>");
    textV9.innerHTML = textV9.textContent.replace(/\S/g , "<span>$&</span>");
    textV10.innerHTML = textV10.textContent.replace(/\S/g , "<span>$&</span>");
    textV11.innerHTML = textV11.textContent.replace(/\S/g , "<span>$&</span>");
    textV12.innerHTML = textV12.textContent.replace(/\S/g , "<span>$&</span>");
    
    const animationGral = anime.timeline({
    targets : [".text1 span",".text2 span",".text3 span",".text4 span",".text5 span",".text6 span",".text7 span",".text8 span",".text9 span",".text10 span",".text11 span",".text12 span"],
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
}; 
   
////////////////////////////////////////Cambio al dar Click en Boton de Frase 3/////////////////////////////////

botonFrase3.onclick = function(){
    
    botonFrase1UI.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase2UI.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase3UI.style.backgroundColor = "rgba(0, 0, 0, 0.651)";

    /*Propiedad CSS Line-Height (Interlineado)*/
    for( let i = 0 ; i < 12 ; i++ ){
        a[i].style.lineHeight = 1.58;
    }

    /*Agregando contenido de la frase (texto) a cada renglon*/
    textV1.innerHTML = textV1.textContent = '"Curiosa es nuestra situación de hijos de la';
    textV2.innerHTML = textV2.textContent = "Tierra. Estamos por una breve visita y no sabemos";
    textV3.innerHTML = textV3.textContent = "con qué fin, aunque a veces creemos presentirlo.";
    textV4.innerHTML = textV4.textContent = "Ante la vida cotidiana no es necesario";
    textV5.innerHTML = textV5.textContent = "reflexionar demasiado: estamos para los demás.";
    textV6.innerHTML = textV6.textContent = "Ante todo para aquellos de cuya sonrisa y";
    textV7.innerHTML = textV7.textContent = "bienestar depende nuestra felicidad; pero también";
    textV8.innerHTML = textV8.textContent = "para tantos desconocidos a cuyo destino nos";
    textV9.innerHTML = textV9.textContent = 'vincula una simpatía."';
    textV10.innerHTML = textV10.textContent = "";
    textV11.innerHTML = textV11.textContent = "";
    textV12.innerHTML = textV12.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';
                                           //Justicia prevalecen sobre las de Poder y Posesión."
    /*Agregando span entre las letras */
    textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
    textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
    textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
    textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
    textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
    textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
    textV7.innerHTML = textV7.textContent.replace(/\S/g , "<span>$&</span>");
    textV8.innerHTML = textV8.textContent.replace(/\S/g , "<span>$&</span>");
    textV9.innerHTML = textV9.textContent.replace(/\S/g , "<span>$&</span>");
    textV12.innerHTML = textV12.textContent.replace(/\S/g , "<span>$&</span>");
    
    const animationGral = anime.timeline({
    targets : [".text1 span",".text2 span",".text3 span",".text4 span",".text5 span",".text6 span",".text7 span",".text8 span",".text9 span",".text12 span"],
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
}; 