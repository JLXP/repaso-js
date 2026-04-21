/** VARIABLES JS */

export default function VariablesEjemplo(){
    let apellido = "Gavilan";
    apellido = 'Marrero';
    let edad = 999;
    let fecha = new Date();

    let persona = {
        nombre: 'Felipe',
        apellido: 'Gavilan',
        edad: 999,
        fecha: new Date(),
        estaLougeado: true
    }

    let miFuncion = function duplicar(valor){
        return valor * 2;
    }

    var pais = "Republica Dominicana";
    pais =  "Mexico";

    for(var i = 1; i <= 10; i++){
        //** */
    }

    for(let i = 1; i<=10;i++){

    }
    
    //Aqui se mostrara 11 si se usa var que var no se puede controlar de la misma manera que let
    //Si se usara let lo que pasara es que marca undefined ya que se controlo y evita que se pueda consultar si no estan en el mismo scope
    console.log(i)

    //Igual se pueden definir constantes, estos no pueden cambiar de valor
    //Para ser mas precisos no se puede reasignar valores de una constante
    const continente = 'America';
    //continente = 'Europa'

    //cuando se usa en arrays no se puede reasignar valores, pero si se puede crear internamente nuevos objetos
    const ingredientes = ['Queso', 'Europa']
    ingredientes.push('Vegetales');
}