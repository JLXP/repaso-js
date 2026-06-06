import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import funcionPrincipal, { funcionExportada as aliasDeLaFuncion, configuracionesGlobales } from './ejemplos/modulo.js'
import TemplateStringsEjemplo from './ejemplos/template-strings.js'
import OperadorTernarioEjemplo from './ejemplos/operador-ternario.js'
import LiteralesDeObjetosMejorado from './ejemplos/literal-objeto-mejorado.js'
import Operadorspread from './ejemplos/spread.js'
import { Rectangulo, Cuadrado } from './ejemplos/clase.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <div id="listado">

  </div>
`

setupCounter(document.querySelector('#counter'))

// const rectangulo1 = new Rectangulo(2,3);
// console.log(rectangulo1.alto)
// rectangulo1.area()

// const rectangulo2 = new Rectangulo(4,5);
// rectangulo2.area();

// const cuadrado1 = new Cuadrado(5);
// cuadrado1.area();

const lista = MapEjemplo();
document.querySelector('#listado').innerHTML = lista;