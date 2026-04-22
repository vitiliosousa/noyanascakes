"use client";

import { useState } from "react";
import Image from "next/image";

const CAKES = [
  {
    id: 1,
    category: "Aniversário",
    title: "Celebrações de Vida",
    description:
      "Designs vibrantes e personalizados que capturam a personalidade e alegria de cada aniversariante.",
    src: "/aniversario.jpg",
    span: "md:col-span-8",
    height: "h-[400px] md:h-[600px]",
    hideDetailsOverlay: false,
  },
  {
    id: 2,
    category: "Casamento",
    title: "O Sim Eterno",
    description:
      "Sofisticação em cada camada para o dia mais importante da sua vida.",
    src: "/casamento.jpg",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[600px]",
    hideDetailsOverlay: false,
  },
  {
    id: 3,
    category: "Personalizados",
    title: "Esculturas Comestíveis",
    description: "Se pode imaginar, nós podemos criar em forma de bolo.",
    src: "/personalizados.jpg",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[450px]",
    hideDetailsOverlay: false,
  },
  {
    id: 4,
    category: "Personalizados",
    title: "Detalhe de Ganache",
    description: "Feito à perfeição e texturas únicas.",
    src: "/doces.jpg",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[450px]",
    hideDetailsOverlay: true,
  },
  {
    id: 5,
    category: "Aniversário",
    title: "Bolo Festivo",
    description: "Cores e sabores vibrantes.",
    src: "/salgados.jpg",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[450px]",
    hideDetailsOverlay: true,
  },
];

const CATEGORIES = ["Todos", "Aniversário", "Casamento", "Personalizados"];

export default function CollectionsSection() {
  const [filter, setFilter] = useState("Todos");

  const filteredCakes = CAKES.filter((cake) => {
    if (filter === "Todos") return true;
    return cake.category === filter;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16 min-h-150">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 md:mb-12">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-3 md:mb-4 font-headline">
            Colecções Exclusivas
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-body">
            Filtre por ocasião para encontrar a inspiração perfeita para o seu
            evento. De celebrações íntimas a grandes casamentos.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm tracking-wide transition-all flex-1 lg:flex-none text-center shadow-sm
                ${
                  filter === cat
                    ? "bg-primary text-on-primary font-bold shadow-md"
                    : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {filteredCakes.length > 0 ? (
          filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className={`${filter === "Todos" ? cake.span : "md:col-span-6 lg:col-span-4"} group animate-in slide-in-from-bottom-4 fade-in duration-500`}
            >
              <div
                className={`relative overflow-hidden rounded-xl bg-surface-container-low ${cake.height}`}
              >
                <Image
                  alt={cake.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={cake.src}
                  width={1000}
                  height={1000}
                />

                {!cake.hideDetailsOverlay ? (
                  <>
                    <div className="absolute inset-0 bg-linear-to-t from-on-background/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <span className="inline-block bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 uppercase tracking-widest font-label">
                        {cake.category}
                      </span>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 font-headline">
                        {cake.title}
                      </h3>
                      <p className="text-white/80 max-w-sm font-body text-sm md:text-base leading-relaxed">
                        {cake.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-on-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-surface/90 backdrop-blur-md p-4 rounded-full">
                      <span className="material-symbols-outlined text-primary">
                        visibility
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-12 py-20 text-center">
            <p className="text-lg text-on-surface-variant font-body mb-4">
              Nenhum bolo encontrado para a categoria selecionada.
            </p>
            <button
              onClick={() => setFilter("Todos")}
              className="text-primary font-bold underline"
            >
              Limpar Filtro
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
