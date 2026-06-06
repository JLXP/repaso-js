//sincrono es que siempre espera de la resolucion de una tarea para ejecutar la siguiente, asincrona es que no espera a que se resuelva una tarea para ejecutar la siguiente

//promesa es un objeto que representa la eventual finalizacion o fracaso de una operacion asincrona


export function Promesa(){
    fetch('https://jsonplaceholder2.typidcode.com/todos/1')
    .then(respuesta => respuesta.json())
    .catch(error => console.log('hubo un error'))
    .then(json => console.log(json))
}

export async function Asyncawait(){
    try{
        const respuesta = await fetch('https://jsonplaceholder2.typidcode.com/todos/1');
        const json = await respuesta.json();
        console.log(json);
    } catch (error) {
        console.log('hubo un error');
    }
}


