export function funcionExportada(){
    console.log("Ejecutando la funcion exportada");
}

function funcionOculta(){
    console.log("Esta funcion no puede ser invocada desde fuera del modulo");
}

export let configuracionesGlobales = {
    idioma: 'ESP',
    logueado: false
}

//function Principal es la funcion por defecto del modulo, no es necesario usar llaves para importarla
export default function funcionPrincipal()
{
    console.log("Ejecutando la funcion principal")
}

// Solo se exportan las funciones y variables que se declaran con export, el resto no es accesible desde fuera del modulo
export {funcionExportada, configuracionesGlobales};