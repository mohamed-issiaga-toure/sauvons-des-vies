import { navItems } from "../../data/navigation";
import { siteConfig } from "../../data/siteConfig";
import SocialLink from "../molecules/SocialLink";
import FacebookIcon from "../atoms/FacebookIcon";
import InstagramIcon from "../atoms/InstagramIcon";
import WhatsAppIcon from "../atoms/WhatsAppIcon";
import Icon from "../atoms/Icon";
import FadeIn from "../atoms/FadeIn";
import logo from "../../assets/logo/logo.png"

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">

      <FadeIn>
      <div className="max-w-5xl r px-4 py-12 grid grid-cols-1 md:grid-cols-4 justify-between items-center mx-auto gap-10">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className=" rounded-full bg-transparent p-1">
          <img src={logo} alt="" className="w-18 text-2xl h-auto object-cover rounded-full"
          />
        </div>
         <h1 className="font-bold text-xl text-accent">Sauvons  <span 
         className="font-bold text-xl text-secondary">
         Des</span> <span
          className="font-bold text-xl text-primary"
        >Vies</span>
        </h1>   
         </div>
          <p className="text-sm opacity-70 mb-4">{siteConfig.tagline}</p>
          
          <FadeIn delay={0.15}>
          <div className="flex gap-1">
            {siteConfig.socialLinks.map((social) => {
              const IconComponent = socialIconMap[social.id];
              return (

                <SocialLink key={social.id} href={social.url} label={social.label}>
                  <IconComponent size={18} />
                </SocialLink>
              );
            })}
          </div>
          </FadeIn>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase opacity-50 mb-3">Navigation</p>
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (

              <FadeIn key={item.id} delay={index *0.20}>
              <li key={item.id}>
                <a href={item.href} className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                  {item.label}
                </a>
              </li>
            </FadeIn>
           ))}
           
          </ul>
        </div>
         <div>
          <p className="text-xs tracking-widest uppercase opacity-50 mb-3">Entreprise</p>
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (

              <FadeIn key={item.id} delay={index *0.20}>
              <li key={item.id}>
                <a href={item.href} className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                  {item.label}
                </a>
              </li>
            </FadeIn>
           ))}
           
          </ul>
        </div>

       <FadeIn delay={0.30}>
        <div>
          <p className="text-xs tracking-widest uppercase opacity-50 mb-3">Contact</p>
          <div className="flex flex-col gap-2 text-sm opacity-80">

            <a href={siteConfig.email} className="flex items-center gap-2">
              <Icon name="Mail" size={14} />
              {siteConfig.email}
            </a>
            
            <span className="flex items-center gap-2">
              <Icon name="Phone" size={14} />
              {siteConfig.phone}
            </span>
          </div>
        </div>
        </FadeIn>
      </div>


      <FadeIn delay={0.11}>
      <div className="border-t border-neutral-content/10 py-4 px-6">
        <p className="text-center text-xs opacity-50">
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés. <span className="font-bold text-xs text-blue-500"> | By Pus Touré </span>
        </p>
      </div>
      </FadeIn>
      </FadeIn>
    </footer>
  );
}