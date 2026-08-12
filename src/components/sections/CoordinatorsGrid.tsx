import { useState } from "react";
import { coordinators } from "../../data/coordinators";
import PersonCard from "../molecules/PersonCard";
import FadeIn from "../atoms/FadeIn";

/**
 * CoordinatorsGrid — grille des 33 coordinateurs de préfecture.
 * Recherche par préfecture + pagination stricte : "Voir plus" remplace
 * les cartes actuelles par les suivantes (pas d'accumulation).
 */

const ITEMS_PER_PAGE = 6;

export default function CoordinatorsGrid() {

  
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = coordinators.filter((c) =>
    c.prefecture.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visible = filtered.slice(startIndex, endIndex);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
  setCurrentPage(1);
};

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  return (
    <section id="coordinateurs" className="py-16 px-6 bg-base-300">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-xs tracking-widest uppercase text-secondary mb-2">
          Nos coordinateurs
        </p>
        <h2 className="text-2xl font-medium mb-2">
          Un relais dans chaque préfecture
        </h2>
        <p className="text-sm text-base-content/70">
          33 préfectures, 33 coordinateurs, une présence sur tout le territoire.
        </p>
      </div>

      <div className="max-w-sm mx-auto mb-8 ">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Rechercher une préfecture..."
          className="input input-bordered w-full border-accent-content bg-green-100 rounded-radius-field outline-none focus:border-base-300 "
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {visible.map((coordinator, index) => (
          <FadeIn key={coordinator.id} delay={index * 0.08}>
            <PersonCard
              fullName={coordinator.fullName}
              title={coordinator.prefecture}
              tag={coordinator.role}
              photoUrl={coordinator.photoUrl}
            />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-base-content/50 mt-8">
          Aucune préfecture ne correspond à cette recherche.
        </p>
      )}

      {filtered.length > 0 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="btn btn-primary btn-md"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Voir précédent
          </button>

          <span className="text-xs text-base-content/60">
            Page {currentPage} / {totalPages}
          </span>

          <button
            className="btn btn-primary border-none  btn-md"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Voir plus
          </button>
        </div>
      )}
    </section>
  );
}