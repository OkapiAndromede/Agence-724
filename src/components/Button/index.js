import PropTypes from "prop-types";

import "./style.scss";
/**
 * Composant Button réutilisable
 *
 * Rend soit :
 * - un bouton classique (<button type = "button"/>)
 * - un bouton de soumission (<input type = "submit"/>)
 * en fonction de la prop 'type'
 * @component
 *
 *
 * @param {string} [title = ""] : le titre du bouton
 * @param {function} [onClick = ()=> null] : fonction déclenché lors du clique
 * @param {1|2} [type=BUTTON_TYPES.DEFAULT] : Type de bouton :
 *  1 = BUTTON_TYPES.DEFAULT (bouton classique)
 *  2 = BUTTON_TYPES.SUBMIT (bouton de soumission)
 * @param {boolean} [disabled=false] : Désactive le bouton lorsqu'il vaut 'true'
 * @param {React.ReactNode} [children=null] : Contenu du bouton (texte ou éléments React)
 *
 *@returns {JSX.Element} : élément button html ou input submit
 */
export const BUTTON_TYPES = {
  DEFAULT: 1,
  SUBMIT: 2,
};

const Button = ({ title, onClick, type, disabled, children }) => {
  switch (type) {
    case BUTTON_TYPES.DEFAULT:
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
    case BUTTON_TYPES.SUBMIT:
      return (
        <input
          disabled={disabled}
          className="Button"
          type="submit"
          data-testid="button-test-id"
          value={children}
          onClick={onClick}
          title={title}
        />
      );
    default:
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
  }
};

// eslint-disable-next-line react/no-typos
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  type: BUTTON_TYPES.DEFAULT,
  title: "",
  children: null,
};

export default Button;
