import Diena from "./Diena";
import gosling1 from './gosling-1.png';
import gosling2 from './gosling-2.png';
import gosling3 from './gosling-3.png';
import gosling4 from './gosling-4.png';
import gosling5 from './gosling-5.png';

function App() {
  const pirmdienasStundas = [
    "Sports pie Klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥"
  ];
  const otrdienasStundas = [
    "Cita stunda",
    "Vēl stunda",
  ];
  const visasStundas = [
    {diena: "Pirmdiena",
    stundas: [
      "Pragromarot",
      "kys mīlu fiziku",
      "Vēsture",
      "🫥"
    ],
    img: {gosling1}
    },
    {diena: "Otradiena",
    stundas: [
      "Pragromarot",
      "giga mīlu fiziku",
      "fake",
      "Y"
    ],
    img: {gosling2}
    },
    {diena: "Tresdiena",
    stundas: [
      "Pragromarot",
      "mega mīlu fiziku",
      "real",
      "W"
    ],
    img: {gosling3}
    },
    {diena: "Ceturdiena",
    stundas: [
      "Pragromarot",
      "ultra mīlu fiziku",
      "hihi",
      ":3"
    ],
    img: {gosling4}
    },
    {diena: "Piektadiena",
    stundas: [
      "Pragromarot",
      "faking mīlu fiziku",
      "subaru",
      ":,("
    ],
    img: {gosling5}
    }
  ];

  const dienasJSX = visasStundas.map((diena, i) => {
    return <Diena key={i} diena={diena.diena} stundas={diena.stundas} />
  });
  return (
    <>
    <h1 className="Virsraksts">By Gusis OG veidots stundu saraksts</h1>
      {dienasJSX}
    </>
  )
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js

// JS - .forEach() ir masīvu metode,
// kura apskata ikkatru masīva elementu,
// bet neko neatgriež (nav return)

// JS - .map() ir masīvu metode,
// kura apskata ikkatru masīva elementu
// un atgriež jaunu masīvu (return Array)


//