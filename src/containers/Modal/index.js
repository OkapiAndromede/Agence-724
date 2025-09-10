import PropTypes from "prop-types";
import { useState } from "react";
import Icon from "../../components/Icon";
import "./style.scss";
/**
 * Composant Modal permettant d'afficher une fenêtre modale
 *
 * Utilise une render prop (children) pour assurer un contrôle d'ouverture/fermeture
 * et affiche un contenu principale via la prop "Content"
 * @component
 *
 * @param {boolean} [opened = false] : Définit si la modale est ouverte par défaut
 * @param {React.ReactNode} Content : Contenu principale affiché par la modale
 * @param {(args : {isOpened : boolean, setIsOpened: function}) => React.ReactNode} children :
 * Fonction de rendu recevant l'état isOpened et la fonction setIsOpened pour contrôler l'ouverture/fermeture
 *
 * @returns {JSX.Element} Composant Modal rendu
 */
const Modal = ({ opened, Content, children }) => {
  const [isOpened, setIsOpened] = useState(opened);
  return (
    <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (
        <div className="modal">
          <div className="content">
            {Content}
            <button
              type="button"
              data-testid="close-modal"
              onClick={() => setIsOpened(false)}
            >
              <Icon name="close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = {
  opened: false,
};

Modal.propTypes = {
  opened: PropTypes.bool,
  Content: PropTypes.node.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
