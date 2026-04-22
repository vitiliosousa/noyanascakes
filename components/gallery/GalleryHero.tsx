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
        <div className="space-y-6 md:space-y-8 text-left">
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">
                  auto_awesome
                </span>
              </span>
              <h3 className="font-bold text-on-surface text-lg">
                Qualidade em cada detalhe
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed pl-11">
              Cada bolo é preparado com atenção, garantindo sabor, textura e uma
              apresentação cuidada.
            </p>
          </div>

          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">
                  handshake
                </span>
              </span>
              <h3 className="font-bold text-on-surface text-lg">
                Compromisso com o cliente
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed pl-11">
              Trabalhamos com responsabilidade e respeito, cumprindo cada
              encomenda com dedicação.
            </p>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">
                  volunteer_activism
                </span>
              </span>
              <h3 className="font-bold text-on-surface text-lg">
                Feito com paixão
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed pl-11">
              Mais do que bolos, criamos experiências que tornam cada momento
              especial.
            </p>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
              </span>
              <h3 className="font-bold text-on-surface text-lg">
                Sempre a evoluir
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed pl-11">
              Estamos em constante crescimento, buscando melhorar cada vez mais
              a qualidade dos nossos produtos e serviços.
            </p>
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