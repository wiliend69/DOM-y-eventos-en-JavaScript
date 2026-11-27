

const formulario = document.getElementById('saludo');
const input = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');


formulario.addEventListener('click', (evento) => {
    evento.preventDefault();
    const nombreUsuario = input.value;
    mensaje.textContent = `¡Hola, ${nombreUsuario}! Bienvenido.`;
})


const numero = document.getElementById('num');
const  botonSumar = document.getElementById('sumar');
const botonReiniciar = document.getElementById('reiniciar')

let contador = 0;

botonSumar.addEventListener('click', () =>{
    contador++;
    numero.textContent = contador;
    if(contador ===10){
        numero.style.color = 'green';
    }
})

botonReiniciar.addEventListener('click', () =>{
    contador =0;
    numero.textContent = contador;

    numero.style.color = '';
})

const txt = document.getElementById('texto');
const copia = document.getElementById('vista');

txt.addEventListener('input', (evento) => {
  copia.textContent = evento.target.value;
});


const colorbg = document.getElementById('color');
const card = document.getElementById('miCard');

colorbg.addEventListener('change',(evento) => {

    card.style.backgroundColor = evento.target.value;

})


