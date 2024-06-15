let letra = `Un arcoíris
Mandado a hacer,
Especialmente para ti, solo para ti
Todos lo ven, pero, es solo tuyo.

...

Sí, está hecho de agua…
Agua que herví de mis lágrimas,
Y luz…
Luz que recojo cada vez que abres los ojos.

...

Sin contacto entre fotones de luz
 y agua condensada del aire
No hay refracción, no hay reflexión ni división del color;
Sin organización y proyección,
No hay cambio, no hay asombro, no hay sorpresa.

...

Por eso no se puede eliminar el contacto,
No puedes hacerlo brillar, sin antes haberlos juntado.

...

Así funciona, ¿sabías?
Solo debes mirarme, en mi profunda tristeza;
Con tus dos grandes luceros, a mis ojos lluviosos;
y así hacerme feliz, hacerte feliz, y el cielo llenar de colores.

.
`
let botonArcoiris = document.getElementById("boton");
let letraArcoiris = document.getElementById("contenedorLetra")

function miSplit(ary){
    return ary.split("\n")
}

function mostOcul(element){
    if(element.style.display === "block"){
        element.style.display = "none";
    }else{
        element.style.display = "block";
    }
}

function playAudioAfterDelay() {
    // Esperar 3 segundos (3000 milisegundos)
    setTimeout(function() {
        // Obtener el elemento de audio
        var audio = document.getElementById('myAudio');
        // Reproducir el audio
        audio.play();
    }, 3000); // 3000 milisegundos = 3 segundos
}

function inicio(){
    mostOcul(botonArcoiris);
    playAudioAfterDelay();
}
botonArcoiris.addEventListener("click", inicio())