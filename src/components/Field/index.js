import PropTypes from "prop-types";

import "./style.scss";
/**
 * Composant Field réutilisable affichant un champ de formulaire
 *
 * Rend un input de type text ou un textarea selon la valeur du "type"
 * @component
 *
 * @param {1|2} [type = FIELD_TYPES.INPUT_TEXT ] : type de champs :
 * 1 = input de type text
 * 2 = textarea
 * @param {string} [label = ""] : texte affiché comme libéllé du champ
 * @param {string} [name = "field-name"] : nom du champ
 * @param {string} [placeholder = ""] : texte indicatif affiché dans le champ
 *
 * @returns {JSX.Element} composant Field rendu
 */
export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea name={name} data-testid="field-testid" />;
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
  }
  return (
    <div className="inputField">
      <span>{label}</span>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.INPUT_TEXT,
  name: "field-name",
};

export default Field;
