/**
 * Fonction sortDescending appliquant un tri par ordre décroissant
 *
 * @typedef {Object} Event
 * @property {string} id : identifiant unique de l'évènement
 * @property {string} title : Titre de l'évènement
 * @property {string} description : Description de l'évènement
 * @property {string} cover : URL de l'image de l'évènement
 * @property {string} date : Date de l'évènement
 *
 * @function
 * @param {Event []} data : Tableau d'évènements à trier
 *
 * @returns {Event []} Tableau d'évènements trié par ordre décroissant sur la date
 */
export const sortDescending = (data = []) => {
  try {
    const sortData = [...data].sort(
      (evtA, evtB) => new Date(evtB.date) - new Date(evtA.date)
    );
    return sortData;
  } catch (err) {
    console.log(`Erreur lors du tri décroissant : ${err}`);
    return [];
  }
};
/**
 * Fonction filterType appliquant un filtre par type d'évènement
 * @function
 *
 * @param {Event[]} data : Tableau d'évènement à filtrer
 * @param {string} type : Type d'évènement
 * @returns {Event[]} Tableau d'évènement filtrés par type d'évènement
 */
export const filterType = (data, type) => {
  try {
    return (data || []).filter((event) => !type || event.type === type);
  } catch (err) {
    console.log(`Erreur lors du filtre des évènements par type : ${err}`);
    return [];
  }
};
/**
 * Fonction filterPagination appliquant un filtre par pagination
 * @param {Event[]} data : Tableau d'évènement à filtrer
 * @param {number} currentPage : La page actuelle
 * @param {number} PER_PAGE : Nombre maximum d'évènement par page
 * @returns {Event[]} Tableau d'évènement filtrés par pagination
 */
export const filterPagination = (data, currentPage, PER_PAGE) => {
  try {
    return (data || []).filter(
      (_, index) =>
        index >= (currentPage - 1) * PER_PAGE && index < PER_PAGE * currentPage
    );
  } catch (err) {
    console.log(
      `Erreur lors du filtrage des évènements par pagination : ${err}`
    );
    return [];
  }
};
