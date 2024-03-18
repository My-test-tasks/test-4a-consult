import { Radio } from "../Radio";
import styles from "./Card.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Card = ({
  card: { title, with_sale, without_sale, text, sale, id },
}) => {
  useGSAP(() => {
    gsap.to(".card", 2, { opacity: 1 });
  });

  return (
    <label htmlFor={id} className={`card ${styles.card}`}>
      <Radio name="rate" id={id} />
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>
        <div className={styles.with_sale}>{`${with_sale}₽`}</div>
        {without_sale && (
          <div className={styles.without_sale}>{`${without_sale}₽`}</div>
        )}
      </div>
      <div className={styles.text}>{text}</div>
      {sale && <div className={styles.sale}>{`-${sale}%`}</div>}
    </label>
  );
};
