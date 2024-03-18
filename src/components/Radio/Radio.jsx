import { useState } from "react";
import styles from "./Radio.module.css";

export const Radio = (props) => {
  const [checked, setChecked] = useState(props.checked ?? false);

  const handlerOnChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <label
      htmlFor={props.id}
      className={
        props.visible ? styles.radio : `${styles.radio} ${styles.invisible}`
      }
    >
      <input
        type="radio"
        name={props.name}
        className={styles.hidden}
        id={props.id}
        checked={checked}
        onChange={handlerOnChange}
      />
      <span className={styles.label}></span>
    </label>
  );
};
