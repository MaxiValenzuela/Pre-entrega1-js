// funciones
// condicionales
// bucle
alert('Bienvenido! este es un juego de preguntas y respuestas sobre ¡DRAGON BALL! si quieres medir tus conocimientos con 5 simples preguntas? en marcha guerrero z');
let nombreCompleto = prompt('Porfavor ingresa tu nombre y apellido para registrarte');

function preguntaN1 () {
    let respuesta = prompt('¿Quien es el protagonista principal de la tan renombrada serie? \n 1.Goku \n 2.Bardock \n 3.Goten \n 4.Turles');
    if(isNaN(respuesta)){
        alert('Por favor ingresa una opcion numerica\n(del 1 a 4).');
        preguntaN1();
    }
    else if(respuesta == 1 ) {
        alert('Respuesta correcta! Genial.');
    } else{
        alert('incorrecto! es Goku pero no te preocupes vamos por la siguiente!');
    }
}

preguntaN1();

function preguntaN2(){
    let respuesta = prompt('¿De que planeta es originario nuestro protagonista? \n 1.Viltrum \n 2.Kripton \n 3.Tierra \n 4.Planeta Vegetta');
    if(isNaN(respuesta)){
        alert('Por favor ingresa una opcion numerica\n(del 1 a 4).');
        preguntaN2();
    }
    else if(respuesta == 4 ) {
        alert('Respuesta acertada! Bien hecho.');
    } else{
        alert(' Lo lamento  \n La respuesta era Planeta Vegetta');
    }
}

preguntaN2();

alert('Buen comienzo! pero esto recien empieza jeje')

function preguntaN3 (){
    let respuesta = prompt('¿Quien fue el primer maestro de Goku? \n 1.Kaiosama \n 2.Kamisama \n 3.Roshi \n 4.Whis');
    if(isNaN(respuesta)){
        alert('Por favor ingresa una opcion numerica\n(del 1 a 4).');
        preguntaN3();
    }
    else if(respuesta == 3 ) {
        alert('Respuesta acertada! Bien hecho.');
    } else{
        alert(' Lo lamento  \n Si bien todos fueron maestros de el, la respuesta es Roshi.');
    }
}

preguntaN3();

function preguntaN4(){
    let respuesta = prompt('¿Donde consiguio Goku su transformacion de SUPER SAIYAJIN y contra quien estaba luchando? \n 1.En Namek vs Freezer \n 2.En el torneo de Cell vs Cell \n 3.Planeta sagrado vs Kid Buu \n 4.El torneo de poder vs Jiren');
    if(isNaN(respuesta)){
        alert('Por favor ingresa una opcion numerica\n(del 1 a 4).');
        preguntaN4();
    }
    else if(respuesta == 1 ) {
        alert('Directo en el blanco, nice job.');
    } else{
        alert(' imposible equivocarse!! media pila.');
    }
}

preguntaN4();

function preguntaN5(){
    let respuesta = prompt('¿Cual es la mitica frase de Vegeta? \n 1.Maldito mono \n 2.Eres un insecto! \n 3.Me distraigo un segundo y pasa esto?? \n 4.Maldito seas kakarotto');
    if(isNaN(respuesta)){
        alert('Por favor ingresa una opcion numerica\n(del 1 a 4).');
        preguntaN5();
    }
    else if(respuesta == 2 || respuesta == 4) {
        alert('Daremos valido tanto la 1 como la 4 jaja');
    } else{
        alert('Cerca pero que se le hara.');
    }
}

preguntaN5();

let mensaje = prompt('Eso fue todo hasta ahora, nos encontramos en etapa beta aun pero se agradece tu colaboracion! \n A continuacion tendras 2 opciones: \n Volver a intentar con el comando "again" \n Salir con el comando "exit"');
if (mensaje==='again'){
    preguntaN1();
    preguntaN2();
    preguntaN3();
    preguntaN4();
    preguntaN5();
} else if(mensaje='exit'){
    alert(`Hasta luego y muchas gracias por tu colaboracion ${nombreCompleto}`);
}

