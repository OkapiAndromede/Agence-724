import PropTypes from "prop-types";

import "./style.scss";
/**
 * Composant ModalEvent affichant le détaille d'un évènement
 *
 * Affiche les détails d'un évènement avec une image, un titre, une date, une description,
 * un nombre de participant et les prestations de l'évènement.
 * @component
 *
 * @typedef {object} event : Objet contenant les propriétés associés à un évènement
 * @property {string} cover : URL de l'image de l'évènement
 * @property {string} title : Titre de l'évènement
 * @property {string} periode : Période de l'évènement
 * @property {string} description : Description de l'évènement
 * @property {number} nb_guesses : Nombre de participant
 * @property {string[]} prestations : Liste des prestations
 *
 * @param {event} event : Objet contenant les informations de l'évènement
 *
 * @returns {JSX.Element} Composant ModalEvent rendu
 */
const ModalEvent = ({ event }) => (
  <div className="ModalEvent">
    <div className="ModalEvent__imageContainer">
      <img
        data-testid="card-image-testid"
        src={event.cover}
        alt={event.title}
      />
    </div>
    <div className="ModalEvent__title">
      <div className="ModalEvent__titleLabel">{event.title}</div>
      <div className="ModalEvent__titlePeriode">{event.periode}</div>
    </div>
    <div className="ModalEvent__descriptionContainer">
      <h3>Description</h3>
      <div>{event.description}</div>
    </div>
    <div className="ModalEvent__descriptionContainer">
      <h3>Participants</h3>
      <div>{event.nb_guesses} participants</div>
    </div>
    <div className="ModalEvent__descriptionContainer">
      <h3>Prestations</h3>
      {event.prestations.map((presta) => (
        <div key={presta}>{presta}</div>
      ))}
    </div>
  </div>
);

ModalEvent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  event: PropTypes.any.isRequired,
};

export default ModalEvent;
