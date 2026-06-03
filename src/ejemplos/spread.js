export default function Operadorspread(){
    //Ejemplo 1: Operador spread con una funcion

    const sumar = (a,b) => a + b;

    const numeros = [2,3];

    const resultados = sumar(numeros[0], numeros[1]);

    console.log(resultaados) //5
}