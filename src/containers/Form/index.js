import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

/**
 * Composant Form affichant un formulaire de contact
 *
 * Le composant permet de :
 * - Remplir et soumettre un formulaire de contact
 * - Appeler une API simulée ("mockContactApi") lors de l'envoi
 *
 * Etats gérés :
 * - "Sending" : Désactive le bouton "submit" et affiche "en cours"
 * - "Erreur" : Appelle la fonction de callback 'onError' avec l'erreur
 * - "Succès" : Appelle la fonction de callback 'onSuccess'
 *
 * @component
 *
 * @param {function} [onSuccess = () => null] : Fonction callback appelé après un envoi réussi du formulaire
 * @param {function} [onError = () => null] : Fonction callback appelé en cas d'échec, reçoit l'objet erreur
 *
 * @returns {JSX.Element} Composant Form rendu
 */
const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);
      // We try to call mockContactApi
      try {
        await mockContactApi();
        setSending(false);
        onSuccess();
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError]
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field placeholder="" label="Nom" />
          <Field placeholder="" label="Prénom" />
          <Select
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
          />
          <Field placeholder="" label="Email" />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
};

export default Form;
