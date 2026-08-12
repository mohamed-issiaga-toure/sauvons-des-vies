
import julien from "../assets/coordinateurs/julien.jpg";
import famoussa from "../assets/coordinateurs/famoussa.jpg";
import fernandez from "../assets/coordinateurs/fernandez.jpg";
import alpha from "../assets/coordinateurs/alpha.jpg";
import keita from "../assets/coordinateurs/keita.jpg";
import sow from "../assets/coordinateurs/sow.jpg";
 import aissatou from "../assets/coordinateurs/aissatou.jpg";
 import amara from "../assets/coordinateurs/amara.jpg";
import andre from "../assets/coordinateurs/andre.jpg";
import balde from "../assets/coordinateurs/balde.jpg";
import bangaly from "../assets/coordinateurs/bangaly.jpg";
import bassidy from "../assets/coordinateurs/bassidy.jpg";
import biro from "../assets/coordinateurs/biro.jpg";
import boubacarII from "../assets/coordinateurs/boubacarII.jpg";
import camara from "../assets/coordinateurs/camara.jpg";
import cece from "../assets/coordinateurs/cece.png";
import diao from "../assets/coordinateurs/diao.jpg";
import diaoo from "../assets/coordinateurs/diaoo.jpg";
import fode from "../assets/coordinateurs/fode.jpg";
import honore from "../assets/coordinateurs/honore.png";
import jean from "../assets/coordinateurs/jean.jpg";
import kemo from "../assets/coordinateurs/kemo.jpg";
import kemoko from "../assets/coordinateurs/kemoko.jpg";
import lamine from "../assets/coordinateurs/lamine.jpg";
import lansana from "../assets/coordinateurs/lansana.jpg";
import mamandou from "../assets/coordinateurs/mamandou.jpg";
import adama from "../assets/coordinateurs/adama.jpg";
import oumou from "../assets/coordinateurs/oumou.jpg"
import pithagore from "../assets/coordinateurs/pithagore.jpg"
import saran from "../assets/coordinateurs/saran.jpg"
import sayon from "../assets/coordinateurs/sayon.jpg"
import suzanne from "../assets/coordinateurs/suzanne.jpg"





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
  { id: 5, fullName: "Moussa Keita", prefecture: "Dabola", role: "Coordinateur", photoUrl: keita},
  { id: 6, fullName: "Mamadou Moussa Sow", prefecture: "Dalaba", role: "Coordinateur", photoUrl: sow },

  // --- Placeholders, à remplacer avec les vraies informations ---
{ id: 7, fullName: "Bassidy Bangoura", prefecture: "Dinguiraye", role: "Coordinateur", photoUrl: bassidy },
{ id: 8, fullName: "Fodé Bangalu Kourouma", prefecture: "Dubréka", role: "Coordinateur", photoUrl: fode },
{ id: 9, fullName: "Bangaly Samoura", prefecture: "Faranah", role: "Coordinateur", photoUrl: bangaly },
{ id: 10, fullName: "Moussa Touré", prefecture: "Forécariah", role: "Coordinateur", photoUrl: pithagore },
{ id: 11, fullName: "Suzanne Millimono", prefecture: "Fria", role: "Coordinateur", photoUrl: suzanne },
{ id: 12, fullName: "Mamadou Diao Touré", prefecture: "Gaoual", role: "Coordinateur", photoUrl: diao },
{ id: 13, fullName: "Moussa Kourouma", prefecture: "Guékédou", role: "Coordinateur", photoUrl: julien },
{ id: 14, fullName: "Saran Condé", prefecture: "Kankan", role: "Coordinatrice", photoUrl: saran },
{ id: 15, fullName: "Lansana Kaba", prefecture: "Kérouané", role: "Coordinateur", photoUrl: lansana },
{ id: 16, fullName: "Kêmoko Condé", prefecture: "Kindia", role: "Coordinateur", photoUrl: kemoko },
{ id: 17, fullName: "Kemo Traoré", prefecture: "Kissidougou", role: "Coordinateur", photoUrl: kemo },
{ id: 18, fullName: "Mamandou Ciré Baldé", prefecture: "Koubia", role: "Coordinateur", photoUrl: mamandou },
{ id: 19, fullName: "Mamandou Alpha Baldé", prefecture: "Koundara", role: "Coordinateur", photoUrl: balde },
{ id: 20, fullName: "Mohamed Lamine Kéita", prefecture: "Kouroussa", role: "Coordinateur", photoUrl: lamine },
{ id: 21, fullName: "Boubacar Biro Barry", prefecture: "Labé", role: "Coordinateur", photoUrl: biro },
{ id: 22, fullName: "Oumou Diallo", prefecture: "Lélouma", role: "Coordinatrice", photoUrl: oumou },
{ id: 23, fullName: "Coordinateur à venir", prefecture: "Lola", role: "Coordinateur", photoUrl: cece },
{ id: 24, fullName: "Jean Paul Dembadouno", prefecture: "Macenta", role: "Coordinateur", photoUrl: jean },
{ id: 25, fullName: "Adama Hawa Barry", prefecture: "Mali", role: "Coordinatrice", photoUrl: adama },
{ id: 26, fullName: "Abdoulaye Camara", prefecture: "Mamou", role: "Coordinateur", photoUrl: camara },
{ id: 27, fullName: "Amara Kéita", prefecture: "Mandiana", role: "Coordinateur", photoUrl: amara },
{ id: 28, fullName: "Andre Kolié", prefecture: "Nzérékoré", role: "Coordinateur", photoUrl: andre },
{ id: 29, fullName: "Bouboucar II Diallo", prefecture: "Pita", role: "Coordinateur", photoUrl: boubacarII },
{ id: 30, fullName: "Sayon Doumbouyah", prefecture: "Siguiri", role: "Coordinateur", photoUrl: sayon },
{ id: 31, fullName: "Coordinateur à venir", prefecture: "Télimélé", role: "Coordinateur", photoUrl: diaoo },
{ id: 32, fullName: "Aissatou Barry", prefecture: "Tougué", role: "Coordinatrice", photoUrl: aissatou },
{ id: 33, fullName: "Honoré Gbanamou", prefecture: "Yomou", role: "Coordinateur", photoUrl: honore },
];