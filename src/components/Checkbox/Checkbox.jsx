import { useState } from "react";
import styles from "./Checkbox.module.css";

export const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked ?? false);

  const handlerOnChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div className={styles.checkbox_wrapper_65}>
      <label htmlFor="cbk1-65">
        <input
          type="checkbox"
          id="cbk1-65"
          checked={checked}
          onChange={handlerOnChange}
        />
        <span className={styles.cbx}>
          <svg width="14px" height="14px" viewBox="0 0 12 11">
            <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
          </svg>
        </span>
        <span> {props.children}</span>
      </label>
    </div>
  );
};
