
import julien from "../assets/coordinateurs/julien.jpg";
import famoussa from "../assets/coordinateurs/famoussa.jpg";
import fernandez from "../assets/coordinateurs/fernandez.jpg";
import alpha from "../assets/coordinateurs/alpha.jpg";
import keita from "../assets/coordinateurs/keita.jpg";
import sow from "../assets/coordinateurs/sow.jpg";
// import aissatou from "../assets/coordinateurs/aissatou.jpg";
// import amara from "../assets/coordinateurs/amara.jpg";
// import andre from "../assets/coordinateurs/andre.jpg";
// import balde from "../assets/coordinateurs/balde.jpg";
// import bangaly from "../assets/coordinateurs/bangaly.jpg";
// import bassidy from "../assets/coordinateurs/bassidy.jpg";
// import biro from "../assets/coordinateurs/biro.jpg";
// import boubacarII from "../assets/coordinateurs/boubacarII.jpg";
// import camara from "../assets/coordinateurs/camara.jpg";
// import cece from "../assets/coordinateurs/cece.png";
// import diao from "../assets/coordinateurs/diao.jpg";
// import diaoo from "../assets/coordinateurs/diaoo.jpg";
// import fode from "../assets/coordinateurs/fode.jpg";
// import honore from "../assets/coordinateurs/honore.png";
// import jean from "../assets/coordinateurs/jean.jpg";
// import kemo from "../assets/coordinateurs/kemo.jpg";
// import kemoko from "../assets/coordinateurs/kemoko.jpg";
// import lamine from "../assets/coordinateurs/lamine.jpg";
// import lansana from "../assets/coordinateurs/lansana.jpg";
// import mamandou from "../assets/coordianteurs/mamandou.jpg";
// import moussa from "../assets/coordinateurs/moussa.jpg";
// import oumou from "../assets/coordinateurs/oumou.jpg"
// import pithagore from "../assets/coordinateurs/pithagore.jpg"
// import saran from "../assets/coordinateurs/saran.jpg"
// import sayon from "../assets/coordinateurs/sayon.jpg"
// import suzanne from "../assets/coordinateurs/suzanne.jpg"





/**
 * coordinators.ts — les 33 coordinateurs de préfecture.
 * 6 fiches réelles (issues des visuels Facebook de l'ONG), 27 placeholders
 * en attente des vraies informations — à remplacer un par un, sans jamais
 * toucher aux composants qui consomment ces données.
 */

export interface Coordinator {
  id: number ; // identifiant unique, utilisé comme key dans les listes
  fullName: string;
  prefecture: string;
  role: string;
  photoUrl?: string; // optionnel : CoordinatorCard affiche un repli si absent
}

export const coordinators: Coordinator[] = [
  // --- Fiches réelles ---
  { id: 1, fullName: "Yombouno Julien", prefecture: "Beyla", role: "Coordinateur", photoUrl: julien},
  { id: 2, fullName: "N'Famoussa Camara", prefecture: "Boffa", role: "Coordinateur", photoUrl: famoussa },
  { id: 3, fullName: "Fernandez", prefecture: "Boké", role: "Coordinatrice", photoUrl: fernandez },
  { id: 4, fullName: "Alpha Mohamed Barry", prefecture: "Coyah", role: "Coordinateur", photoUrl: alpha },
  { id: 5, fullName: "Moussa Keita", prefecture: "Dabola", role: "Coordinateur", photoUrl: keita },
  { id: 6, fullName: "Mamadou Moussa Sow", prefecture: "Dalaba", role: "Coordinateur", photoUrl: sow },

  // --- Placeholders, à remplacer avec les vraies informations ---
//   { id: 7, fullName: "Coordinateur à venir", prefecture: "Dinguiraye", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 8, fullName: "Coordinateur à venir", prefecture: "Dubréka", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 9, fullName: "Coordinateur à venir", prefecture: "Faranah", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 10, fullName: "Coordinateur à venir", prefecture: "Forécariah", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 11, fullName: "Coordinateur à venir", prefecture: "Fria", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 12, fullName: "Coordinateur à venir", prefecture: "Gaoual", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg"  },
//   { id: 13, fullName: "Coordinateur à venir", prefecture: "Guékédou", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 14, fullName: "Coordinateur à venir", prefecture: "Kankan", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 15, fullName: "Coordinateur à venir", prefecture: "Kérouané", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 16, fullName: "Coordinateur à venir", prefecture: "Kindia", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 17, fullName: "Coordinateur à venir", prefecture: "Kissidougou", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 18, fullName: "Coordinateur à venir", prefecture: "Koubia", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 19, fullName: "Coordinateur à venir", prefecture: "Koundara", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 20, fullName: "Coordinateur à venir", prefecture: "Kouroussa", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 21, fullName: "Coordinateur à venir", prefecture: "Labé", role: "Coordinateur" ,photoUrl：../assets/coordinateurs/julien.jpg" },
//   { id：22，fullName："Coordinateur à venir"，prefecture："Lélouma"，role："Coordinateur" ，photoUrl：../assets/coordinateurs/julien.jpg" },
//   { id: 23, fullName: "Coordinateur à venir", prefecture: "Lola", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 24, fullName: "Coordinateur à venir", prefecture: "Macenta", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 25, fullName: "Coordinateur à venir", prefecture: "Mali", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 26, fullName: "Coordinateur à venir", prefecture: "Mamou", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 27, fullName: "Coordinateur à venir", prefecture: "Mandiana", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 28, fullName: "Coordinateur à venir", prefecture: "Nzérékoré", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 29, fullName: "Coordinateur à venir", prefecture: "Pita", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 30, fullName: "Coordinateur à venir", prefecture: "Siguiri", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 31, fullName: "Coordinateur à venir", prefecture: "Télimélé", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
//   { id: 32, fullName: "Coordinateur à venir", prefecture: "Tougué", role："Coordinateur" ，photoUrl：../assets/coordinateurs/julien.jpg" },
//   { id: 33, fullName: "Coordinateur à venir", prefecture: "Yomou", role: "Coordinateur" ,photoUrl: "../assets/coordinateurs/julien.jpg" },
];