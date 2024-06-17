let letra = `.
..
...
.
..
...
.
..
...
.
..
...
.
..
...
.
..
...
.
..
...
.
..
...
.
..
...
Un arcoíris
Mandado a hacer,
Especialmente para ti, solo para ti
Todos lo ven, pero, es solo tuyo.
Sí, está hecho de agua…
Agua que herví de mis lágrimas,
Y luz…
Luz que recojo cada vez que abres los ojos.
Sin contacto entre fotones de luz
 y agua condensada del aire
No hay refracción, no hay reflexión ni división del color;
Sin organización y proyección,
No hay cambio, no hay asombro, no hay sorpresa.
Por eso no se puede eliminar el contacto,
No puedes hacerlo brillar, sin antes haberlos juntado.
Así funciona, ¿sabías?
Solo debes mirarme, en mi profunda tristeza;
Con tus dos grandes luceros, a mis ojos lluviosos;
y así hacerme feliz, hacerte feliz, y el cielo llenar de colores.
.
..
...
`

let botonArcoiris = document.getElementById("boton");
let letraArcoiris = document.getElementById("contenedorLetra")
botonArcoiris.style.display = "block";
botonArcoiris.addEventListener("click", inicio)

function miSplit(ary){
    return ary.split("\n")
}

let letraLista = miSplit(letra);

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


function tiempoFrase(frase) {
    if (frase.length < 4) {
        return 2500;
    } else if (frase.length < 20) {
        return 3000;
    } else {
        return 4750;
    }
}

function* inserText(text) {
    let indice = 0;
    while (indice < text.length) {
        letraArcoiris.innerHTML = text[indice];
        yield tiempoFrase(text[indice]);
        indice++;
    }
}

let insertarTexto;

function intervalo() {
    function nextFrase() {
        const { value, done } = insertarTexto.next();
        if (!done) {
            setTimeout(nextFrase, value);
        }
    }
    nextFrase();
}

function inicio() {
    mostOcul(botonArcoiris);
    insertarTexto = inserText(letraLista);
    intervalo();
    playAudioAfterDelay();
}