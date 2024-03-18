import { useEffect, useRef } from "react";
import styles from "./Popup.module.css";
import { PopupCard } from "../PopupCard/PopupCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Popup = ({ isPopupOpen, setIsPopupOpen, cards }) => {
  const ref = useRef();

  const handlerCloseModal = () => {
    gsap.to(".popup", 0.2, {
      marginTop: "10%",
      opacity: 0,
      ease: "ease-in",
    });

    setTimeout(() => {
      setIsPopupOpen(false);
    }, 300);
  };

  const handlerOnClick = (event) => {
    const rect = ref.current.getBoundingClientRect();

    const isOutsideDialog =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (isOutsideDialog) {
      gsap.to(".popup", 0.2, {
        marginTop: "10%",
        opacity: 0,
        ease: "ease-in",
      });

      setTimeout(() => {
        setIsPopupOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isPopupOpen]);

  useGSAP(() => {
    gsap.from(".popup", 0.4, {
      marginTop: "10%",
      opacity: 0,
      ease: "ease-out",
      delay: 0.5,
    });
  });

  return (
    <dialog
      className={`popup ${styles.popup}`}
      ref={ref}
      onCancel={handlerCloseModal}
      onClick={handlerOnClick}
    >
      <span className={styles.hot}>горящее предложение</span>
      <h3 className={styles.header}>
        Не упусти свой <span>последний шанс</span>
      </h3>
      <p className={styles.text}>
        Мы знаем, как трудно начать.. <b>Поэтому!</b>
      </p>
      <p className={styles.sale_text}>
        Дарим скидку для <span>лёгкого старта 🏃‍♂️</span>
      </p>
      <p className={styles.cards_title}>
        Посмотри, что мы для тебя приготовили 🔥
      </p>
      <div className={styles.cards}>
        {cards.map((card) => (
          <PopupCard key={card.id} card={card} />
        ))}
      </div>
      <button className={styles.button}>Начать тренироваться</button>
      <button className={styles.close} onClick={handlerCloseModal}></button>
    </dialog>
  );
};
