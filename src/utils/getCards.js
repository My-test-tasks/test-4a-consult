import { getSale } from "./getSale";

export const CARD_TYPE = {
  popular: "popular",
  discount: "discount",
  normal: "normal",
};

const CARD_TEXT = [
  "Чтобы просто начать 👍🏻",
  "Привести тело в порядок 💪🏻",
  "Изменить образ жизни 🔥",
  "Всегда быть в форме и поддерживать своё здоровье ⭐️",
];

const getNormalCard = (normalCards, name) => {
  const [normalCard] = normalCards.filter((card) => card.name === name);

  return normalCard;
};

export const getCards = (cards, type) => {
  const normalCards = cards.filter(
    (card) => !card.isPopular && !card.isDiscount
  );
  const popularCards = cards.filter((card) => card.isPopular);
  const discountCards = cards.filter((card) => card.isDiscount);

  if (type === CARD_TYPE.popular) {
    return popularCards.map((card, idx) => {
      const normalCard = getNormalCard(normalCards, card.name);

      return {
        id: card.id,
        title: card.name,
        with_sale: card.price,
        without_sale: normalCard.price,
        text: CARD_TEXT[idx],
        sale: getSale(normalCard.price, card.price),
      };
    });
  }

  if (type === CARD_TYPE.discount) {
    return discountCards.map((card) => {
      const normalCard = getNormalCard(normalCards, card.name);

      return {
        id: card.id,
        title: card.name,
        with_sale: card.price,
        without_sale: normalCard.price,
        sale: getSale(normalCard.price, card.price),
      };
    });
  }

  return normalCards.map((card, idx) => {
    return {
      id: card.id,
      title: card.name,
      with_sale: card.price,
      text: CARD_TEXT[idx],
    };
  });
};
