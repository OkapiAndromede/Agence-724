import PropTypes from "prop-types";

import "./style.scss";
/**
 * Composant ServiceCard affichant un service de l'agence
 *
 * Rend une carte contenant une image et l'enfant du composant
 * @component
 *
 * @param {string} imageSrc : Source de l'image
 * @param {string} [imageAlt = "image"] : Titre alternatif de l'image
 * @param {React.ReactNode} children : Enfant du composant
 *
 * @returns {JSX.Element} Composant ServiceCard rendu
 */
const ServiceCard = ({ imageSrc, imageAlt, children }) => (
  <div className="ServiceCard">
    <div className="ServiceCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
    </div>
    <div className="ServiceCard__textContainer">{children}</div>
  </div>
);

ServiceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ServiceCard.defaultProps = {
  imageAlt: "image",
};

export default ServiceCard;
