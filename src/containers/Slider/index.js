import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";
import { sortDescending } from "../../utils/array";
/**
 * Composant Slider affichant un carrousel des derniers évènements
 *
 * Récupère les données des évènements via le hook personalisé 'useData()', puis :
 * - Trie par ordre décroissant les derniers évènements "focus"
 * - Affiche l'évènement avec une image, un titre, une description et une date
 * - Fait défiler automatique les évènements toutes les 5 secondes
 *
 * @component
 * @typedef {Object} event : Objet contenant les propriétés associés à un évènement
 * @property {string} id : identifiant unique de l'évènement
 * @property {string} title : Titre de l'évènement
 * @property {string} description : Description de l'évènement
 * @property {string} cover : URL de l'image de l'évènement
 * @property {string} date : Date de l'évènement
 *
 * @returns {JSX.Element} Composant Slider rendu
 */
const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const eventSorted = sortDescending(data?.focus);

  const nextCard = () => {
    setTimeout(
      () => setIndex(index < eventSorted.length - 1 ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {eventSorted?.map((event, indexEvent) => (
        <article
          key={event.title}
          className={`SlideCard SlideCard--${
            index === indexEvent ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />

          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </article>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {eventSorted.map((event, indexEvent) => (
            <input
              key={`_${event.id}`}
              type="radio"
              name="radio-button"
              checked={index === indexEvent}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
