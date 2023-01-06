let objetoclick = document.getElementById("clickenviarcookie");
let objetocookie = document.getElementById("cookieenviada");
let objetocookie2 = document.getElementById("cookieenviada2");

let objetoclick2 = document.getElementById("clicklogo");

let clickform = document.getElementById("clickform");
let miRegex = /[A-Z|a-z]{3,}@[A-Z|a-z]{3,}[.]{1}[A-Z|a-z]{1,6}/;
let miRegex2 = /^[1-9]{9,9}$/;
let valorrr = document.getElementById("inputEmail04");
let numeromov = document.getElementById("validationCustom06");
const forms = document.querySelectorAll('.needs-validation');

$(document).ready(function(){
  leerCookie();
})

objetoclick.addEventListener("click", (e)=>{
  objetocookie.style.display = "none"
  objetocookie2.style.overflow = "auto"
  ponerCookie();
});

objetoclick2.addEventListener("click", (e)=>{
  objetoclick2.classList.add("animate__rubberBand");
  setTimeout(() => {
  objetoclick2.classList.remove("animate__rubberBand");
  }, 1000);
});

ScrollReveal().reveal('.contenedorcajas', { delay: 300 });

clickform.addEventListener("click", (e)=>{
  if (miform.validationCustom07.value == ""){
    miform.validationCustom07.focus();
  }
  if (!miform.invalidCheck07.checked){
    miform.invalidCheck07.focus();
  }
  if (!(miRegex2.test(numeromov.value))){
    miform.validationCustom06.focus();
  }
  if (miform.inputAddress05.value == ""){
    miform.inputAddress05.focus();
  }
  if (!(miRegex.test(valorrr.value))){
    miform.inputEmail04.focus();
  }
  if (miform.validationCustom03.value == ""){
    miform.validationCustom03.focus();
  }
  if (miform.validationCustom02.value == ""){
    miform.validationCustom02.focus();
  }
  if (miform.validationCustom01.value == ""){
    miform.validationCustom01.focus();
  }
});

(() => {
  'use strict'

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();


function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};
function eraseCookie(name) {
  document.cookie = name+'=; Max-Age=-99999999;';
};

function leerCookie(){
  if(getCookie('aceptar_cookie')!='1'){
    objetocookie.style.display = "flex";
    objetocookie2.style.overflow = "hidden";
  }
  else {
    objetocookie.style.display = "none";
    objetocookie2.style.overflow = "auto";
  }
};

function ponerCookie(){
  setCookie('aceptar_cookie','1',365);
  objetocookie.style.display = "none";
  objetocookie2.style.overflow = "auto";
};







// Declaramos las variables respectivas que usaremos
var $window = $(window);
var $cont_vid = $('.contenedor_video');
var $video = $('.video');

// Con el método .outerHeight(); obtenemos la altura externa de la clase .video
var alturaVideo = $video.outerHeight();

// Dejamos oculto por default el bótón para cerrar el video flotante
var $btn_cerrar = $('.btn_cerrar').hide();

//Mediate esta función capturamos si el usuario inicia la reproducción del video
jQuery(function($) {

  $('video.vid').one('play', function () {

    // Por defecto limpiamos la clase videoflotante2 que establece la posicion inicial del video flotante
    $('.video').removeClass('videoflotanteno');

    // Al desplazarnos hacia abajo o hacia arriba después de iniciar la reproducción del video, se muestra el video flotante o sticky
    $window.on('scroll',  function() {

      // Con el método .scrollTop(); obtenemosla posición actual de la barra de desplazamiento de la ventana '$window'
      var scrollTopWin = $window.scrollTop();

      // Con el método .offset(); obtenemos  las coordenadas de desplazamiento de un elemento
      var videoBottom= alturaVideo + $cont_vid.offset().top;
      //var scroll = $(window).scrollTop();

      // Si la posición actual de la ventana es > que el desplazamiento actual (alturaVideo + $cont_vid.offset().top;) realizamos el lanzado
      // del video flotante o sticky o si no que siga oculto
      if (scrollTopWin > videoBottom) {
        $cont_vid.height(alturaVideo);
        $video.addClass('videoflotante');
        $('.centrar').css('display', 'inline');
        $btn_cerrar.show();
      } else {
        $cont_vid.height('auto');
        $video.removeClass('videoflotante');
        $('.centrar').css('display', 'flex');
        $btn_cerrar.hide();
      }
    });
  });
});

jQuery(function($) {

  $('.btn_cerrar').on('click', function() {
    $('.video').addClass('videoflotanteno');
    $('video').trigger('pause');
    $('.centrar').css('display', 'flex');
  });

});

jQuery(function($) {
    $('video.vid').on('playing', function () {
      $('.video').removeClass('videoflotanteno');
    });
});

jQuery(function($) {
    $('video.vid').on('stop', function () {
      $('.video').removeClass('videoflotante');
      $('.video').removeClass('videoflotanteno');
    });
});


let imgBox = document.querySelectorAll("#fotoscarru2");
let imgBox2 = document.querySelectorAll("#fotoss");
let indicatorscarru = document.querySelectorAll("#carruselindica");
let fotoscarru = document.querySelectorAll("#carruselfotos");
let fotoscarru2 = document.querySelectorAll("#carruselfotos2");
let carrusel2 = document.getElementById("carouselExampleIndicators2");
let galeriadefotos = document.getElementById("fotitosgaleria");

for(let i = 0; i < imgBox.length; i++){
   // pasamos el evento como parametro con `e`
   imgBox2[i].addEventListener('click', function(e){
     //accedemos a la propiedad target del evento
     indicatorscarru[i].classList.add('active');
     indicatorscarru[i].setAttribute('aria-current', 'true');
     fotoscarru[i].classList.add('active');
     carrusel2.style.display = "flex";
     galeriadefotos.style.display = "none";
     objetocookie2.style.overflow = "hidden";
   })
};
for(let j = 0; j < fotoscarru2.length; j++){
    fotoscarru2[j].addEventListener("click", (e)=>{
       //accedemos a la propiedad target del evento
       for(let i = 0; i < imgBox.length; i++){
         indicatorscarru[i].classList.remove('active');
         indicatorscarru[i].removeAttribute('aria-current');
         fotoscarru[i].classList.remove('active');
       }
       objetocookie2.style.overflow = "auto";
       carrusel2.style.display = "none";
       galeriadefotos.style.display = "flex";
    });
};
