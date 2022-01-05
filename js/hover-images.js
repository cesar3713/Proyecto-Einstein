const bigBall = document.querySelector('.cursor__ball--big');          //////Circulo grande//
const smallBall = document.querySelector('.cursor__ball--small');      //////Circulo pequeño//

///////////////////////////////////// elementos afectados por Hover-Imagen: //

const pAlbert = document.querySelector(".p-Albert");
const pEinstein = document.querySelector(".p-Einstein");
const violin = document.querySelector(".violin-musica");


////////////////////////////////////  div (img hover) de los elementos afectados ateriormente descritos: //

const pAlbertImg = document.querySelector(".p-Albert-hover");
const pEinsteinImg = document.querySelector(".p-Einstein-hover");
const violinHoverImg = document.querySelector(".violin-img-hover");


//////////////////////////////////////////////////

///////// Opacidad de imagenes al cargar la pagina //

pAlbertImg.classList.add("oculto");
pEinsteinImg.classList.add("oculto");
/*violinHoverImg.classList.add("oculto");*/

//////////////////////////// Movimiento de Imagenes ////

function onMouseMoveImg1(e) {
  TweenMax.to(pAlbertImg, .3, {
    x: e.clientX,
    y: e.clientY 
  })
}
function onMouseMoveImg2(e) {
  TweenMax.to(pEinsteinImg, .3, {
    x: e.clientX,
    y: e.clientY 
  })
}
function onMouseMoveImg3(e) {
  TweenMax.to(violinHoverImg, .3, {
    x: e.clientX,
    y: e.clientY 
  })
}
document.body.addEventListener('mousemove', onMouseMoveImg1);
document.body.addEventListener('mousemove', onMouseMoveImg2);
document.body.addEventListener('mousemove', onMouseMoveImg3);
/////////////////////////////////////////////////////////

////////////////////////// Aparecer y/o desaparecer con hover en elemento //

const mouseDentroImg1 = () => {
	pAlbertImg.classList.remove("oculto");
}
const mouseFueraImg1 = () => {
	pAlbertImg.classList.add("oculto");
}
const mouseDentroImg2 = () => {
	pEinsteinImg.classList.remove("oculto");
}
const mouseFueraImg2 = () => {
	pEinsteinImg.classList.add("oculto");
}
const mouseDentroImg3 = () => {
	violinHoverImg.classList.remove("oculto");
}
const mouseFueraImg3 = () => {
	violinHoverImg.classList.add("oculto");
}

pAlbert.addEventListener("mouseenter",mouseDentroImg1);
pAlbert.addEventListener("mouseleave",mouseFueraImg1);
pEinstein.addEventListener("mouseenter",mouseDentroImg2);
pEinstein.addEventListener("mouseleave",mouseFueraImg2);
violin.addEventListener("mouseenter",mouseDentroImg3);
violin.addEventListener("mouseleave",mouseFueraImg3);

/////////////////////////////////////////////////////////

///////////////////////Aparecer Desaparecer cursor modificado //

const mouseDentroPAlbertEinstein = () => {
	bigBall.classList.add("oculto");
    smallBall.classList.add("oculto");
}
const mouseFueraPAlbertEinstein = () => {
	smallBall.classList.remove("oculto");
    bigBall.classList.remove("oculto");
}


pAlbert.addEventListener("mouseenter",mouseDentroPAlbertEinstein);
pAlbert.addEventListener("mouseleave",mouseFueraPAlbertEinstein);

pEinstein.addEventListener("mouseenter",mouseDentroPAlbertEinstein);
pEinstein.addEventListener("mouseleave",mouseFueraPAlbertEinstein);

//////////////////////////////////////////////////////////////