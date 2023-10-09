import Stunda from "./Stunda";

function Diena(props) {
  const stundasJSX = props.stundas.map((stunda, i) => {
    return <Stunda key={i} nosaukums={stunda} />
  });

  return (
  <>
    <h2>{props.diena}</h2>
    <ul>
      {stundasJSX}
    </ul>
  </>
  )
};

export default Diena;

// Kā uztaisīt stundas otrdienai?
// Trešdienai?