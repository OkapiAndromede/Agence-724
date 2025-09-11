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
