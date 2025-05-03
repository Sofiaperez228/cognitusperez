/*
let primerNumero;
let segundoNumero;

function pedirDatos() {
    primerNumero = parseInt (prompt ('ingrese el primer numero'));
    segundoNumero = parseInt (prompt('ingrese el segundo Numero'));
}

function mostrarDatos() {
    let resultado = primerNumero + segundoNumero;
    alert('el resultado es: ' + resultado);

}

pedirDatos();
mostrarDatos();
*/
const botonsofia =document.getElementById('botonMensaje')
const mostrarTexto =document.getElementById('mostrarTexto')

function accionBoton() {
    mostrarTexto.textContent= 'texto desde boton'
}

botonsofia.addEventListener('click' , accionBoton)