const cuadro = document.querySelectorAll('.cuadro')
const emoji = document.querySelector('.emoji')
const tiempo = document.querySelector('#tiempo')
const puntos = document.querySelector('#puntos')
const btnPlayA = document.querySelector('#playA')
const resetL = document.querySelector('#resetLifes');
const vidas = document.querySelector('#vidas')




let resultado = 0
let lugarGolpe
let tiempoInicial = 10
let idTiempo = null


//pintar el emoji y removerlo
function cuadroRandom() {
    cuadro.forEach(cuadro => {
        cuadro.classList.remove('emoji')
    })
    let cuadroRandom = cuadro[Math.floor(Math.random() * 9)]
    cuadroRandom.classList.add('emoji')
    lugarGolpe = cuadroRandom.id
    
}

//recorre el tablero escucha de mouse
cuadro.forEach(cuadro => {
    cuadro.addEventListener('mousedown', () => {
        if (cuadro.id == lugarGolpe) {
            // console.log(cuadro)
            resultado++
            puntos.textContent = resultado
            lugarGolpe = null
        }
    })
})


//intervalo de tiempo de ejecución
function moverEmoji() {
    idTiempo = setInterval(cuadroRandom, 450)
}

//ejecuto el juego
moverEmoji()



//tiempo
function contadorRegresivo() {
    tiempoInicial--
    tiempo.textContent = tiempoInicial

    if (tiempoInicial == 0) {
        clearInterval(conteoTiempo)
        clearInterval(idTiempo)
    }

}

function reStart() {



    //contadorRegresivo();

    if (tiempoInicial !== 0) {
        alert('No te rindas cobarde aun tienes : ' + tiempoInicial + ' segundos');

        //tiempoInicial=60;

    } else {

        tiempoInicial = 5;//volvemos el tiempo otra vez 60

        conteoTiempo = setInterval(contadorRegresivo, 1000);//vuelve iniciar conteo de tiempo

        vidas.textContent--

        if (vidas.textContent < 1) {
            btnPlayA.disabled = true;
        }

        moverEmoji();

    }



}

//ejecuta la funcion que retrocede el tiempo
let conteoTiempo = setInterval(contadorRegresivo, 1000)


resetL.addEventListener('click', () => {
    vidas.textContent = 3;
    btnPlayA.disabled = false;
    puntos.textContent = 0;
    resultado.textContent = 0;
})

btnPlayA.addEventListener('click', () => {
    if (vidas.textContent == 0) {
        btnPlayA.disabled = true;
        Swal.fire({
            title: 'Succes!',
            text: `Tu puntaje es de ${resultado} `,
            confirmButtonText: 'Aceptar'
        })
    }
    reStart()
})