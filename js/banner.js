var intervCarrusel  = null;
var idxImagen = -1;

window.onload = function() {
    iniciarCarrusel();
}

function cambiarImagen() {
    var carrusel = document.getElementById("carrusel");
    if (idxImagen == 3) {
        idxImagen = 0;
    } else {
        idxImagen = idxImagen + 1;
    }
    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = '<img src="/img/banner3.jpg" alt="" class="banner">';
            break;
        case 1:
            carrusel.innerHTML = '<img src="/img/banner4.jpg" alt="" class="banner">';
            break;
        case 2:
            carrusel.innerHTML = '<img src="/img/banner5.jpg" alt="" class="banner">';
            break;
    }
}

function iniciarCarrusel() {
    intervCarrusel = setInterval(cambiarImagen, 1500);
}