export default function TemplateStringsEjemplo(){
    const nombre = "Felipe Gavilan"; //Comillas simples 
    const pais = "RD"; //Comillas dobles


    const saludo = "Hola," + nombre + ", Como estas?";

    const saludo2 = `Hola, ${nombre}, Como estas? Bienvenido a ${pais}`; //Template Strings o Literales de Plantilla, se usan las comillas invertidas (backticks) y se pueden incluir variables con ${variable}


    const sumar = (a, b) => a + b;

    const mensaje = `Hola, ${nombre}
    
    Esta es una carta
    
    La suma de 2 y 3 es ${sumar(2,3)}
    
    Att: Yo`;

    console.log(mensaje);
}