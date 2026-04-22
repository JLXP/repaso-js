function duplicar(valor){
    return valor * 2;
}

//se puede usar una sintaxis distinta para declarar lo que se conoce como una funcion anonima
//Una funcion anonima es una funcion sin nombre
//Las funciones flecha separan los valores de entrada del cuerpo
let funcionAnonima2 = valor => valor * 2;

//si la funcion es de una linea puede que no sea necesario agregar las llaves y el return
let funcionAnonima = valor => valor * 2; 
funcionAnonima(3);//6

let sumar = (sumando1, sumando2) => sumando1 + sumando2;
sumar(1,2);//3

//se pueden definir funciones anonimas que no reciban parametros
let imprimirAlgo = () => console.log('prueba');
imprimirAlgo();


//una de las razones del ser de las funciones anonimas es abreviar codigo
function FuncionQueRecibeComoParametroUnaFuncion(funcion){
    funcion();
}

FuncionQueRecibeComoParametroUnaFuncion(imprimirAlgo);

FuncionQueRecibeComoParametroUnaFuncion(()=>console.log('lo que yo quiera'));



//otra de las diferencias entre las funciones es el uso del this
//EL this permite accceder al contexto en el cual se ejecuta el codigo actual, existe un valor distinto del this en una funcion normal y 
// en una funcion flecha
//En una funcion normal el valor del this es el valor del objeto que hizo la invocacion de la funcion, el this varia entre como ejecutamos la funcion
//La funcion flecha el this no depende de quien llamo la funcion sino el lugar en que la funcion fue definida


export function EjemploThis(){
    const persona = {
        nombre: 'Felipe',
        edad: 999,
        //En una funcion normal el valor del this es el valor del objeto que hizo la invocacion de la funcion, el this varia entre como ejecutamos la funcion
        saludarNormal: function(){
            setTimeout(function(){
                console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
            }, 1000);
        },
        //La funcion flecha el this no depende de quien llamo la funcion sino el lugar en que la funcion fue definida
        saludarFlecha: function(){
            setTimeout(() => {
                console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
            }, 1000);
        }
    };

    persona.saludarNormal(); //Hola, me llamo undefined y tengo undefined años
    persona.saludarFlecha(); //Hola, me llamo Felipe y tengo 999 años
}