//////////////////////////Variables y Constantes de utilidad///////////////////////

/*Botones que activan las frases*/ 
const botonFrase1 = document.querySelector(".botonFrase1"); 
const botonFrase2 = document.querySelector(".botonFrase2"); 
const botonFrase3 = document.querySelector(".botonFrase3"); 

/*Variable que maneja si una frase es mostrada o no */
var activarFrase = 1;

/*Renglones del parrafo animado : */ 
const textV1 = document.querySelector(".text1");
const textV2 = document.querySelector(".text2");
const textV3 = document.querySelector(".text3");
const textV4 = document.querySelector(".text4");
const textV5 = document.querySelector(".text5");
const textV6 = document.querySelector(".text6");
const textV7 = document.querySelector(".text7");
const textV8 = document.querySelector(".text8");

////////////////////////////Evento por defecto al iniciar el Sitio web///////////////////////////////

if( activarFrase == 1){

    botonFrase1.style.backgroundColor = "rgba(0, 0, 0, 0.651)";

    /*Agregando contenido de la frase (texto) a cada renglon*/
    textV1.innerHTML = textV1.textContent = '"Así es como nosotros, los mortales,';
    textV2.innerHTML = textV2.textContent = "nos hacemos inmortales,";
    textV3.innerHTML = textV3.textContent = "transmitiendo el trabajo hecho por todos.";
    textV4.innerHTML = textV4.textContent = "Si piensan en esto, encontrarán sentido a la vida";
    textV5.innerHTML = textV5.textContent = "y a vuestros esfuerzos, y podrán transmitir";
    textV6.innerHTML = textV6.textContent = "vuestras certeras convicciones";
    textV7.innerHTML = textV7.textContent = 'a otros pueblos y otras épocas."';
    textV8.innerHTML = textV8.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';

    /*Agregando span entre las letras */
    textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
    textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
    textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
    textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
    textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
    textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
    textV7.innerHTML = textV7.textContent.replace(/\S/g , "<span>$&</span>");
    textV8.innerHTML = textV8.textContent.replace(/\S/g , "<span>$&</span>");
}

/////////////////////////// Animacion por defecto al entrar al Sitio web (es decir la animacion de la Frase 1)/////////////////////////// 
/*Animaciones usando funcion de anime.min.js :*/

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

////////////////////////////////////////////////////////////////////////
//////////Cambio al dar Click en Boton de Frase 1///////////

botonFrase1.onclick = function(){
    activarFrase = 1;
    console.log(activarFrase);

    if( activarFrase == 1){
    botonFrase1.style.backgroundColor = "rgba(0, 0, 0, 0.651)";
    botonFrase2.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase3.style.backgroundColor = "rgba(0, 0, 0, 0)";

    /*Agregando contenido de la frase (texto) a cada renglon*/
    textV1.innerHTML = textV1.textContent = '"Así es como nosotros, los mortales,';
    textV2.innerHTML = textV2.textContent = "nos hacemos inmortales,";
    textV3.innerHTML = textV3.textContent = "transmitiendo el trabajo hecho por todos.";
    textV4.innerHTML = textV4.textContent = "Si piensan en esto, encontrarán sentido a la vida";
    textV5.innerHTML = textV5.textContent = "y a vuestros esfuerzos, y podrán transmitir";
    textV6.innerHTML = textV6.textContent = "vuestras certeras convicciones";
    textV7.innerHTML = textV7.textContent = 'a otros pueblos y otras épocas."';
    textV8.innerHTML = textV8.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';

    /*Agregando span entre las letras */
    textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
    textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
    textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
    textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
    textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
    textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
    textV7.innerHTML = textV7.textContent.replace(/\S/g , "<span>$&</span>");
    textV8.innerHTML = textV8.textContent.replace(/\S/g , "<span>$&</span>");
    }
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
}; 
    
//////////Cambio al dar Click en Boton de Frase 2///////////

botonFrase2.onclick = function(){
    activarFrase = 2;
    console.log(activarFrase);
    
    if( activarFrase == 2){
    botonFrase1.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase2.style.backgroundColor = "rgba(0, 0, 0, 0.651)";
    botonFrase3.style.backgroundColor = "rgba(0, 0, 0, 0)";

    /*Agregando contenido de la frase (texto) a cada renglon*/
    textV1.innerHTML = textV1.textContent = '"sassacascascascascascascascascc';
    textV2.innerHTML = textV2.textContent = "nos hacsasccasnmortales,";
    textV3.innerHTML = textV3.textContent = "transmitcsascsascascaschecho por todos.";
    textV4.innerHTML = textV4.textContent = "Si piensancsascsascsascsasccasentido a la vida";
    textV5.innerHTML = textV5.textContent = "y a vuestros esfuerzos, y podrán transmitir";
    textV6.innerHTML = textV6.textContent = "vuestras certeras convicciones";
    textV7.innerHTML = textV7.textContent = 'a otros pueblos y otras épocas."';
    textV8.innerHTML = textV8.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';

    /*Agregando span entre las letras */
    textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
    textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
    textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
    textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
    textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
    textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
    textV7.innerHTML = textV7.textContent.replace(/\S/g , "<span>$&</span>");
    textV8.innerHTML = textV8.textContent.replace(/\S/g , "<span>$&</span>");
    }
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
}; 
   
//////////Cambio al dar Click en Boton de Frase 3///////////

botonFrase3.onclick = function(){
    activarFrase = 3;
    console.log(activarFrase);
    
    if( activarFrase == 3){
    botonFrase1.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase2.style.backgroundColor = "rgba(0, 0, 0, 0)";
    botonFrase3.style.backgroundColor = "rgba(0, 0, 0, 0.651)";

    /*Agregando contenido de la frase (texto) a cada renglon*/
    textV1.innerHTML = textV1.textContent = '"sassacascascascascascascascascc';
    textV2.innerHTML = textV2.textContent = "nos hacsasccasnmortales,";
    textV3.innerHTML = textV3.textContent = "transmitcsascsascascaschecho por todos.";
    textV4.innerHTML = textV4.textContent = "Si piensancsascsascsascsasccasentido a la vida";
    textV5.innerHTML = textV5.textContent = "y a vuestros esfuerzos, y podrán transmitir";
    textV6.innerHTML = textV6.textContent = "vuestras certeras convicciones";
    textV7.innerHTML = textV7.textContent = 'a otros pueblos y otras épocas."';
    textV8.innerHTML = textV8.textContent = 'Albert Einstein, libro "Mi Visión del mundo" 1934.';

    /*Agregando span entre las letras */
    textV1.innerHTML = textV1.textContent.replace(/\S/g , "<span>$&</span>");
    textV2.innerHTML = textV2.textContent.replace(/\S/g , "<span>$&</span>");
    textV3.innerHTML = textV3.textContent.replace(/\S/g , "<span>$&</span>");
    textV4.innerHTML = textV4.textContent.replace(/\S/g , "<span>$&</span>");
    textV5.innerHTML = textV5.textContent.replace(/\S/g , "<span>$&</span>");
    textV6.innerHTML = textV6.textContent.replace(/\S/g , "<span>$&</span>");
    textV7.innerHTML = textV7.textContent.replace(/\S/g , "<span>$&</span>");
    textV8.innerHTML = textV8.textContent.replace(/\S/g , "<span>$&</span>");
    }
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
}; 