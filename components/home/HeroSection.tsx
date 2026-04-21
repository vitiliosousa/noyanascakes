import Link from "next/link";

type HeroSectionProps = {
  whatsappLink: string;
};

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100vh] lg:min-h-[921px] flex items-center overflow-hidden bg-surface pb-12 pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 z-10 text-center lg:text-left">
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-black text-on-surface leading-[0.95] lg:leading-[0.9] tracking-tighter mb-6 lg:mb-8">
            Bolos <br />
            <span className="italic text-primary">feitos com amor</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg mx-auto lg:mx-0 mb-10 lg:mb-12 leading-relaxed">
            Elevando a arte da celebracao atraves da confeitaria personalizada.
            Cada camada conta uma historia de precisao e os melhores
            ingredientes naturais de Mocambique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br text-center from-primary to-primary-container text-white px-5 md:px-7 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold uppercase tracking-wide flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
            >
              Encomendar via WhatsApp
            </a>
            <Link href="/galeria" className="w-full sm:w-auto">
              <button className="w-full bg-surface-container-high text-on-surface px-5 md:px-7 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold uppercase tracking-wide hover:bg-surface-container-highest transition-all h-full">
                Explorar Galeria
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6 relative mt-10 lg:mt-0">
          <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 transform lg:translate-y-10">
            <img
              alt="Bolo Premium"
              className="w-full h-full object-cover"
              data-alt="Exquisito bolo de varias camadas com cobertura rosa suave, delicados detalhes em folha de ouro e flores organicas frescas sobre um pedestal de marmore"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlNmr_V6yfncLCO3ZCC64kdiIaVrlwE6PPTtMG269Yx3clg5hcJokBUriQXTLSUF0IgzJgfjjFkpnMiuLMqlZcJy1Q2UXFu73kF1ssztuNttzz-JonzWQu7oUPgOhD-qhLG3wtrQBFxyEyMSTho0O2yuah_dlzjNxLTjvT0CxL8vqdznlJ5AWScNPx4j8jxxOGwpla8AY5oi77SgincbYk23c8UvUHak1pqB0VuNyHzDrtY9ErDRpBcIFUsEymF0dIROYcXc1httSQ"
            />
          </div>
          <div className="absolute -top-6 -right-6 lg:-top-12 lg:-right-12 w-48 h-48 lg:w-64 lg:h-64 bg-tertiary-container rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-64 h-64 lg:w-80 lg:h-80 bg-primary-container rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
