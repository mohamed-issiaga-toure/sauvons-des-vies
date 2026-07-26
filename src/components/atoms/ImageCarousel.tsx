/**
 * ImageCarousel — carrousel d'images générique, défilement manuel
 * (flèches gauche/droite), basé sur le composant "carousel" de DaisyUI.
 * Réutilisable partout où on a besoin de montrer plusieurs images.
 */

interface ImageCarouselProps {
  images: string[];
  altPrefix: string;
}

export default function ImageCarousel({ images, altPrefix }: ImageCarouselProps) {
  return (
    <div className="carousel w-full rounded-box">
      {images.map((src, index) => {
        const id = `carousel-item-${index}`;
        const prevId = `carousel-item-${(index - 1 + images.length) % images.length}`;
        const nextId = `carousel-item-${(index + 1) % images.length}`;

        return (
          <div key={id} id={id} className="carousel-item relative w-full">
            <img
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              className="w-full h-72 object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
              <a href={`#${prevId}`} className="btn btn-circle btn-sm">❮</a>
              <a href={`#${nextId}`} className="btn btn-circle btn-sm">❯</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}