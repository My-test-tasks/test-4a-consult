import styles from "./Content.module.css";
import manImage from "../../assets/images/man.png";
import { Checkbox } from "../Checkbox";
import { Card } from "../Card";
import { CARD_TYPE, getCards } from "../../utils/getCards";
import { useEffect, useState } from "react";
import { Popup } from "../Popup/Popup";
import { fetchData } from "../../api/fetchData";

export const Content = ({ isTimeOut }) => {
  const [cards, setCards] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const isPopular = !isTimeOut;

  const type = isPopular ? CARD_TYPE.popular : CARD_TYPE.normal;

  useEffect(() => {
    setIsPopupOpen(isTimeOut);
  }, [isTimeOut]);

  useEffect(() => {
    fetchData().then((cards) => {
      setCards(cards);
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.img}>
          <img src={manImage} alt="Man image" />
        </div>

        <div className={styles.content}>
          <div className={styles.cards}>
            {getCards(cards, type).map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
          <p className={styles.text}>
            Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
            чем за 1 месяц
          </p>
          <div className={styles.privacy}>
            <Checkbox checked>
              Я соглашаюсь с <a href="http://">Правилами сервиса</a> и условиями{" "}
              <a href="http://">Публичной оферты.</a>
            </Checkbox>
          </div>
          <button className={styles.button}>Купить</button>
          <p className={styles.text_low}>
            Нажимая «Купить», Пользователь соглашается на автоматическое
            списание денежных средств по истечению купленного периода.
            Дальнейшие списания по тарифам участвующим в акции осуществляются по
            полной стоимости согласно оферте.
          </p>
        </div>
      </main>

      {isPopupOpen && (
        <Popup
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
          cards={getCards(cards, CARD_TYPE.discount)}
        />
      )}
    </>
  );
};
