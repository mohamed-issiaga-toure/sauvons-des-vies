import aboutImage1 from "../assets/about/1.jpg";
import aboutImage2 from "../assets/about/2.jpg";
import aboutImage3 from "../assets/about/3.jpg";

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraph: string;
  images: string[];
}

export const aboutContent: AboutContent = {
  eyebrow: "À propos de de nous",
  title: "Une jeunesse engagée pour bâtir l'avenir en Guinée",
  paragraph:
    "Fondée par une nouvelle génération de jeunes leaders guinéens, l'ONG Sauvons des Vies est née d'un constat d'urgence face aux drames humains liés à l'immigration clandestine et aux traversées maritimes périlleuses. Profondément convaincus que la jeunesse constitue le moteur du développement national, nous œuvrons au quotidien pour redonner espoir et confiance aux jeunes. À travers des campagnes de sensibilisation percutantes et un travail de proximité sur l'ensemble du territoire national, nous luttons contre les pertes en vies humaines en promouvant des alternatives concrètes, sécurisées et durables en Guinée.\n\nSur le terrain, notre action se distingue par une présence communautaire forte, notamment dans des zones stratégiques comme Kankan et Siguiri, points clés d'orientation et de départ pour de nombreux jeunes. Au-delà de la sensibilisation dans les écoles, collèges et lycées, nous menons un plaidoyer actif auprès des autorités publiques, des institutions et du secteur privé pour favoriser la formation professionnelle, l'employabilité et l'entrepreneuriat local. En créant un cadre d'opportunités socio-économiques et de leadership, nous donnons aux jeunes les moyens de se réaliser et de construire leur avenir ici, chez eux.",
  images: [aboutImage1, aboutImage2, aboutImage3],
};