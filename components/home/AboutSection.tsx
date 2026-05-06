import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <div className="relative z-10 p-2 md:p-4 bg-white shadow-2xl rounded-2xl transform lg:-rotate-3">
            <Image
              alt="Referencia da Marca"
              className="rounded-xl w-full h-87.5 sm:h-112.5 md:h-150 object-cover"
              src="/about.png"
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 border-12 md:border-20 border-tertiary-container rounded-full opacity-20 z-0"></div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-tertiary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            Sobre Nós
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface mt-4 md:mt-6 mb-8 md:mb-10 leading-tight">
            {" "}
            Conheça Noyana's Cakes
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-on-surface-variant font-body leading-relaxed text-left">
            <p>
              A Noyana’s Cakes nasceu de uma paixão pela confeitaria e do desejo
              de criar bolos, doces e salgados que realmente fazem parte dos
              momentos importantes das pessoas. Tudo começou de forma simples,
              numa cozinha caseira, com dedicação e vontade de fazer bem feito.
            </p>
            <p>
              Hoje, trabalhamos por encomenda, preparando cada pedido com
              atenção aos detalhes e de acordo com o gosto de cada cliente. Seja
              para um aniversário, casamento ou outro evento, o objetivo é
              sempre o mesmo: entregar um produto de qualidade.
            </p>
          </div>
          <div className="mt-10 md:mt-12 grid grid-cols-2 gap-4 md:gap-8 text-center lg:text-left">
            <div>
              <span className="block text-3xl md:text-4xl font-headline font-bold text-primary">
                +1000
              </span>
              <span className="text-[10px] md:text-sm font-label uppercase tracking-widest text-on-tertiary-fixed-variant">
                Encomendas Realizadas
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-headline font-bold text-primary">
                +10
              </span>
              <span className="text-[10px] md:text-sm font-label uppercase tracking-widest text-on-tertiary-fixed-variant">
                Anos no mercado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
