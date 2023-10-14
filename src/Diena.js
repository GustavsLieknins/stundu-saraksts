import Stunda from "./Stunda";
import Styles from "./Diena.module.css";


function Diena(props) {
  const stundasJSX = props.stundas.map((stunda, i) => {
    return <Stunda key={i} nosaukums={stunda} skaitlis={i+1}/>
  });

  return (
  <>
  
  <div className={Styles.divins}>
  {/* <img src={props.img} width="300px"/> */}
    <ul>
      <li className={Styles.diena}>{props.diena}</li>
      {stundasJSX}
    </ul>
  </div>
  </>
  )
};

export default Diena;

// Kā uztaisīt stundas otrdienai?
// Trešdienai?