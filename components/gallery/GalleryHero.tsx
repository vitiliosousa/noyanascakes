import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className="text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-primary mb-6 md:mb-8 tracking-tighter">
          Nossa Galeria <br className="hidden md:block" />{" "}
          <span className="italic font-normal text-tertiary">de Bolos</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-on-surface-variant max-w-lg mx-auto md:mx-0 mb-8 md:mb-10">
          Cada peça apresentada nesta galeria resulta de um processo criativo
          minucioso, onde estética e sabor convergem para dar origem a
          experiências memoráveis e profundamente sensoriais.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
          <div className="bg-surface-container-low px-4 py-3 md:py-2 rounded-lg flex items-center justify-center gap-2 shadow-sm">
            <span
              className="material-symbols-outlined text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
            <span className="text-sm font-semibold text-on-secondary-container">
              Design Personalizado
            </span>
          </div>
          <div className="bg-surface-container-low px-4 py-3 md:py-2 rounded-lg flex items-center justify-center gap-2 shadow-sm">
            <span
              className="material-symbols-outlined text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span className="text-sm font-semibold text-on-secondary-container">
              Feito com Amor
            </span>
          </div>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0">
        <div className="aspect-4/5 bg-surface-container-highest rounded-xl overflow-hidden editorial-shadow transform md:rotate-2 shadow-[0_32px_48px_-12px_rgba(50,18,15,0.06)]">
          <Image
            alt="Destaque Galeria"
            className="w-full h-full object-cover"
            src="/about.jpg"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 aspect-square w-36 md:w-48 bg-tertiary-container rounded-lg editorial-shadow transform -rotate-6 flex items-center justify-center p-3 md:p-4 shadow-[0_32px_48px_-12px_rgba(50,18,15,0.06)]">
          <p className="text-on-tertiary-container font-serif text-center italic text-base md:text-lg leading-tight">
            Noyana’s Cakes
          </p>
        </div>
      </div>
    </section>
  );
}
