/**
 * Retourne le mois en toutes lettre (français) à partir d'un objet Date.
 *
 * @param {Date} date : l'objet Date dont on veut en extraire le mois
 * @returns {string} : le mois corespondant en toutes lettres
 *
 * @example
 * getMonth(new Date("2022-01-01"));
 * // -> "janvier"
 */
export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth() + 1];
