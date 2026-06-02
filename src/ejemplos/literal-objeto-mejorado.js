export default function LiteralesDeObjetosMejorado(){

    let apellido = 'Gavilan';

    const paisProp = 'pais';
    const paisValor = 'RD';

    let persona  = {
        nombre: 'Felipe',
        apellido,
        funcionNormal(){},
        funcionFlecha: () => {},
        [paisProp]: paisValor
    };

    const retornarValorPropiedad = (prop) => persona[prop];

    console.log(retornarValorPropiedad('apellido'));

    console.log(persona);
}