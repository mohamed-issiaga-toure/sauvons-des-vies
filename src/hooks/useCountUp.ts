import { useState, useEffect, useRef } from "react";

/**
 * useCountUp — anime un nombre de 0 jusqu'à sa valeur finale,
 * déclenché quand l'élément devient visible à l'écran.
 */

export function useCountUp(end: number, duration = 2000) {
  // count = le nombre affiché à l'écran, change à chaque frame de l'animation
  const [count, setCount] = useState(0);

  // ref = référence vers l'élément HTML à surveiller (comme pour useScrollSpy,
  // mais ici on observe UN SEUL élément précis, pas une liste d'ids)
  const ref = useRef<HTMLParagraphElement>(null);

  // hasAnimated = un drapeau (true/false) qui empêche l'animation de se
  // relancer plusieurs fois si l'élément entre/sort de l'écran en boucle
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // On ne déclenche que si l'élément est visible ET qu'on n'a
          // jamais encore joué l'animation pour lui
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true; // on verrouille, plus jamais rejoué

            const startTime = performance.now(); // horodatage de départ

            // animate() se rappelle elle-même à chaque frame d'écran
            // (requestAnimationFrame), jusqu'à ce que la durée soit écoulée
            const animate = (now: number) => {
              const elapsed = now - startTime; // temps écoulé depuis le départ
              const progress = Math.min(elapsed / duration, 1); // 0 → 1
              setCount(Math.floor(progress * end)); // valeur actuelle du compteur

              if (progress < 1) requestAnimationFrame(animate); // pas fini → on continue
            };

            requestAnimationFrame(animate); // premier appel, démarre la boucle
          }
        });
      },
      { threshold: 0.4 } // déclenche à 40% de visibilité
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect(); // nettoyage, comme dans useScrollSpy
  }, [end, duration]);

  // On retourne les DEUX choses dont le composant a besoin :
  // count (à afficher) et ref (à poser sur l'élément à surveiller)
  return { count, ref };
}