// import { icons } from "lucide-react";
import type { icons } from "lucide-react";
import Icon from "../atoms/Icon";
/**
 * ActionCard — carte "domaine d'action" (sauvetage, soins, réinsertion).
 */

interface ActionCardProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

export default function ActionCard({ icon, title, description }: ActionCardProps) {
  return (
    <div className="card bg-base-200 p-10 rounded-2xl   hover:scale-105 transition-transform duration-300">
      <Icon name={icon} size={24} className="text-accent w-8 h-auto bg-base-300 p-2 rounded-full" />
      <h3 className="text-sm font-bold mt-3 mb-1">{title}</h3>
      <p className="text-xs text-base-content/60">{description}</p>
    </div>
  );
}