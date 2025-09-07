import PropTypes from "prop-types";

import "./style.scss";
/**
 * Composant PeopleCard affichant une carte d'un membre de l'équipe
 *
 * Rend une carte contenant une image, un nom et le poste de l'employé
 * @component
 *
 * @param {string} imageSrc : la source de l'image
 * @param {string} [imageAlt = ""] : le titre alternatif de l'image
 * @param {string} position : le poste de l'employé
 * @param {string} name : le nom de l'employé
 *
 * @returns {JSX.Element} composant PeopleCard rendu
 */
const PeopleCard = ({ imageSrc, imageAlt, position, name }) => (
  <div className="PeopleCard">
    <div className="PeopleCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
    </div>
    <div className="PeopleCard__descriptionContainer">
      <div className="PeopleCard__name">{name}</div>
      <div className="PeopleCard__position">{position}</div>
    </div>
  </div>
);

PeopleCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

PeopleCard.defaultProps = {
  imageAlt: "",
};

export default PeopleCard;
