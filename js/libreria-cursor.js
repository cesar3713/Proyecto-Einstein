function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

/////////////////////////////  SI NO ES TACTIL HACE : ///////////

if (!isTouch){  

const bigBall = document.querySelector('.cursor__ball--big');          //////Circulo grande//
const smallBall = document.querySelector('.cursor__ball--small');      //////Circulo pequeño//


const hoverables = document.querySelectorAll('.hoverable-gral');         //////Hover GENERAL para muchos elementos //

////// Espacios para Hover particulares //

const hoverInicio = document.querySelector('.hover-inicio');
const hoverBioCompleta = document.querySelector('.hover-bio'); 
const hoverEins = document.querySelector('.hover-eins');
const hoverIdeas = document.querySelector('.hover-ideas');
const hoverViolin = document.querySelector('.hover-violin');

///////////////////////////////////////////////////////////////

////////////////////////////  Opacidad inicial de los cursores (al cargar la pagina)

bigBall.classList.add("oculto");
smallBall.classList.add("oculto");


//////////////////////////// Movimiento del cursor ////

function onMouseMove(e) {
  TweenMax.to(bigBall, .4, {
    x: e.clientX - 15,
    y: e.clientY - 12.5
  })
  TweenMax.to(smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 7
  })
}
document.body.addEventListener('mousemove', onMouseMove);

///////////////////////Desaparece si NO estamos en el sitio web //////

const mouseDentro = () => {
	bigBall.classList.remove("oculto");
    smallBall.classList.remove("oculto");
}
const mouseFuera = () => {
	smallBall.classList.add("oculto");
    bigBall.classList.add("oculto");
}

document.addEventListener("mouseenter",mouseDentro);
document.addEventListener("mouseleave",mouseFuera);


/////////////////////////////////////////// HOVER //

/////////////////////////////// Hover General de muchos elementos //
/*
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener('mouseenter', onMouseHover);
  hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Hover an element
function onMouseHover() {
  TweenMax.to(bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  })
}
*/
///////////////////////////// Hover PARTICULARES //

//Hover en "hoverInicio"

hoverInicio.addEventListener('mouseenter', onMouseHoverInicio);
hoverInicio.addEventListener('mouseleave', onMouseHoverOutInicio);

function onMouseHoverInicio() {
  TweenMax.to(bigBall, .3, {
    scale: 3.5
  })
  smallBall.classList.add("oculto")
}
function onMouseHoverOutInicio() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  })
  smallBall.classList.remove("oculto")
}

//Hover en "hoverBioCompleta"

hoverBioCompleta.addEventListener('mouseenter', onMouseHoverbio);
hoverBioCompleta.addEventListener('mouseleave', onMouseHoverOutbio);

function onMouseHoverbio() {
  TweenMax.to(bigBall, .3, {
    scale: 5.5
  })
  smallBall.classList.add("oculto")
}
function onMouseHoverOutbio() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  })
  smallBall.classList.remove("oculto")
}

//Hover en "hoverIdeas"

hoverIdeas.addEventListener('mouseenter', onMouseHoverIdeas);
hoverIdeas.addEventListener('mouseleave', onMouseHoverOutIdeas);

function onMouseHoverIdeas() {
  TweenMax.to(bigBall, .3, {
    scale: 4
  })
  smallBall.classList.add("oculto")
}
function onMouseHoverOutIdeas() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  })
  smallBall.classList.remove("oculto")
}

//Hover en "hoverEins"

hoverEins.addEventListener('mouseenter', onMouseHoverEins);
hoverEins.addEventListener('mouseleave', onMouseHoverOutEins);

function onMouseHoverEins() {
  TweenMax.to(bigBall, .3, {
    scale: 4.5
  })
  smallBall.classList.add("oculto")
}
function onMouseHoverOutEins() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  })
  smallBall.classList.remove("oculto")
}

//Hover en "hoverviolin"

hoverViolin.addEventListener('mouseenter', onMouseHoverViolin);
hoverViolin.addEventListener('mouseleave', onMouseHoverOutViolin);

function onMouseHoverViolin() {
  TweenMax.to(bigBall, .3, {
    scale: 4
  })
  smallBall.classList.add("oculto")
}
function onMouseHoverOutViolin() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  })
  smallBall.classList.remove("oculto")
}


}





