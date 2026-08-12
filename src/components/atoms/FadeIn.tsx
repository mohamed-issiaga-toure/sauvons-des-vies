import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * FadeIn — enveloppe n'importe quel contenu pour lui appliquer une
 * animation d'apparition (fondu + léger décalage vers le haut) au moment
 * où il devient visible au scroll.
 *
 * Usage :
 *   <FadeIn>
 *     <ActionCard ... />
 *   </FadeIn>
 *
 * Réutilisable sur n'importe quelle carte/section du site — la logique
 * d'animation n'est écrite qu'une seule fois, ici.
 */

interface FadeInProps {
  children: ReactNode;
  delay?: number; // décalage en secondes, utile pour animer plusieurs cartes en cascade
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}