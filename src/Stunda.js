import styles from "./Stunda.module.css";

function Stunda(props) {
  return (
      <li className={styles.violets}>{props.skaitlis}. {props.nosaukums}</li>
  )
}

export default Stunda;


// Vai HTML ir pareizs?
// Un kā izlabot?
