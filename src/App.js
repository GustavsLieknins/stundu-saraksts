import Diena from "./Diena";

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
    ]
    },
    {diena: "Otradiena",
    stundas: [
      "Pragromarot",
      "giga mīlu fiziku",
      "fake",
      "Y"
    ]
    },
    {diena: "Tresdiena",
    stundas: [
      "Pragromarot",
      "mega mīlu fiziku",
      "real",
      "W"
    ]
    },
    {diena: "Ceturdiena",
    stundas: [
      "Pragromarot",
      "ultra mīlu fiziku",
      "hihi",
      ":3"
    ]
    },
    {diena: "Piektadiena",
    stundas: [
      "Pragromarot",
      "faking mīlu fiziku",
      "subaru",
      ":,("
    ]
    },
  ];

  const dienasJSX = visasStundas.map((diena, i) => {
    return <Diena key={i} diena={diena.diena} stundas={diena.stundas}/>
  });
  return (
    <>
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