import { navItems } from "../../data/navigation";
import { siteConfig } from "../../data/siteConfig";
import SocialLink from "../molecules/SocialLink";
import FacebookIcon from "../atoms/FacebookIcon";
import InstagramIcon from "../atoms/InstagramIcon";
import WhatsAppIcon from "../atoms/WhatsAppIcon";
import Icon from "../atoms/Icon";

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-secondary" />
            <span className="font-medium">{siteConfig.name}</span>
          </div>
          <p className="text-sm opacity-70 mb-4">{siteConfig.tagline}</p>

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
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase opacity-50 mb-3">Navigation</p>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase opacity-50 mb-3">Contact</p>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <span className="flex items-center gap-2">
              <Icon name="Mail" size={14} />
              {siteConfig.email}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Phone" size={14} />
              {siteConfig.phone}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-content/10 py-4 px-6">
        <p className="text-center text-xs opacity-50">
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}