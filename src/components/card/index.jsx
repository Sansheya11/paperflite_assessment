import { useState } from "react";
import styles from "./styles.module.css";
import { Input } from "../../widgets/input";

export const Cards = ({ dataSource, onSave = () => {} }) => {
  return (
    <div className={styles.cardContainer}>
      {dataSource.map((card) => (
        <Card key={card.id} card={card} onCardRename={onSave} />
      ))}
    </div>
  );
};

const Card = ({ card, onCardRename }) => {
  const [cardName, setCardName] = useState("");
  const [isCardClicked, setCardClicked] = useState(false);

  return (
    <div className={`${styles.card}`} onClick={() => setCardClicked(true)}>
      <div>
        <img src={card.thumbnail} alt={card.title} />
      </div>
      {isCardClicked ? (
        <div>
          <Input onChange={(value) => setCardName(value)} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCardRename({ ...card, title: cardName });
              setCardClicked(false);
            }}
          >
            Save
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCardClicked(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div>{card.title}</div>
          <div>
            {card.total} {card.type}
          </div>
        </>
      )}
    </div>
  );
};
