import Stunda from "./Stunda";
import Styles from "./Diena.module.css";

function Diena(props) {
  const stundasJSX = props.stundas.map((stunda, i) => {
    return <Stunda key={i} nosaukums={stunda} />
  });

  return (
  <>
  <div>
    <h2 className={Styles.violets}>{props.diena}</h2>
    <ul>
      {stundasJSX}
    </ul>
  </div>
  </>
  )
};

export default Diena;

// Kā uztaisīt stundas otrdienai?
// Trešdienai?