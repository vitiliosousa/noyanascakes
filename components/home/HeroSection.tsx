import Link from "next/link";
import Image from "next/image";

type HeroSectionProps = {
  whatsappLink: string;
};

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface pb-12 pt-20 md:pt-24 lg:pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-6 z-10 text-center lg:text-left">
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-black text-on-surface leading-[0.95] lg:leading-[0.9] tracking-tighter mb-6 lg:mb-8">
            Bolos <br />
            <span className="italic text-[#FF2479]">feitos com amor</span>
          </h1>
          <p className="font-body text-base text-on-surface-variant max-w-lg mx-auto lg:mx-0 mb-10 lg:mb-12 leading-relaxed">
            Na Noyana's Cakes, cada criação nasce das mãos de uma confeiteira
            dedicada, transformando ingredientes selecionados em bolos, doces e
            salgados que elevam qualquer ocasião. Trabalhamos por encomenda, com
            um cuidado meticuloso em cada detalhe, para garantir sabor,
            elegância e autenticidade em cada entrega.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-br from-[#FF2479] to-[#ff6aa6] text-white text-center px-6 py-4 text-sm rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#FF2479]/30 transition-all duration-300 active:scale-95"
            >
              Encomendar via WhatsApp
            </Link>
            <Link
              href="/galeria"
              className="w-full sm:w-auto text-center bg-surface-container-high text-on-surface px-6 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all duration-300 text-sm active:scale-95"
            >
              Explorar Galeria
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6 relative mt-10 lg:mt-0">
          <div className="relative w-full aspect-square">
            <Image
              alt="Bolo Premium da Noyana's Cakes"
              className="object-cover rounded-2xl"
              src="/cakeshero.png"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -top-6 -right-6 lg:-top-12 lg:-right-12 w-48 h-48 lg:w-64 lg:h-64 bg-[#FF2479] rounded-full opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-64 h-64 lg:w-80 lg:h-80 bg-[#ff6aa6] rounded-full opacity-10 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}