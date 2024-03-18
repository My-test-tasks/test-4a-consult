import { Radio } from "../Radio";
import styles from "./PopupCard.module.css";

export const PopupCard = ({
  card: { title, with_sale, without_sale, sale, id },
}) => {
  return (
    <label htmlFor={id} className={styles.card}>
      <div className={styles.title}>
        <span>{title}</span>
        <Radio name="rate" id={id} visible />
      </div>
      <div className={styles.without_sale}>{`${without_sale}₽`}</div>
      <div className={styles.divider}></div>
      <div className={styles.with_sale}>
        <span>{`${with_sale}₽`}</span>
        <div className={styles.sale}>{`-${sale}%`}</div>
      </div>
    </label>
  );
};
