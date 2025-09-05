import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";
/**
 * Composant EventCard réutilisable affichant une carte d'évènement
 *
 * Rend une carte contenant une image, un label, un titre et une date formatée
 * @component
 *
 * @param {string} imageSrc : la source de l'image
 * @param {string} [imageAlt = "image"] : le titre alternatif de l'image
 * @param {Date} [date = new Date()] : un objet Date représentant la date de l'évènement
 * @param {string} title : le titre de l'évênement
 * @param {string} label : le label associé à l'évènement
 * @param {boolean} [small = false] : un booléen agissant sur le style de la carte
 *
 * @returns {JSX.Element} composant EventCard rendu
 */
const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? " EventCard--small" : ""}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
};

export default EventCard;
