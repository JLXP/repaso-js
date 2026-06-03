export class Rectangulo {

    //* definir propiedades
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    //*definir funcionalidades
    area(){
       console.log(`El area del rectángulo es ${this.alto * this.ancho}`) 
    }
}

//* Instanciar = Crear una variable a partir de un tipo


//* Herencia

export class Cuadrado extends Reactangulo{
    constructor(alto){
        super(alto, alto);
        this.alto = alto;
    }

    area(){
       console.log(`El area del cuadrado es ${this.alto * this.alto}`);
    }
}

