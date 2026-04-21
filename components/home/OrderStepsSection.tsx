type OrderStepsSectionProps = {
  whatsappLink: string;
};

export default function OrderStepsSection({ whatsappLink }: OrderStepsSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-tertiary-fixed font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            Processo
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6">
            Simplicidade em cada etapa
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="relative pl-6 md:pl-0">
            <span className="text-7xl md:text-9xl font-headline font-black text-white/20 absolute -top-8 -left-2 md:-top-12 md:-left-8 select-none">
              01
            </span>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-3 md:mb-4">
                Escolha o seu Bolo
              </h3>
              <p className="text-white/70 font-body text-sm md:text-base">
                Navegue pela nossa colecao ou defina o seu proprio perfil de
                sabor personalizado e estetica de design.
              </p>
            </div>
          </div>
          <div className="relative pl-6 md:pl-0">
            <span className="text-7xl md:text-9xl font-headline font-black text-white/20 absolute -top-8 -left-2 md:-top-12 md:-left-8 select-none">
              02
            </span>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-3 md:mb-4">
                Contacto via WhatsApp
              </h3>
              <p className="text-white/70 font-body text-sm md:text-base">
                Clique em qualquer botao para iniciar uma conversa direta com a
                nossa equipa para um orcamento personalizado.
              </p>
            </div>
          </div>
          <div className="relative pl-6 md:pl-0">
            <span className="text-7xl md:text-9xl font-headline font-black text-white/20 absolute -top-8 -left-2 md:-top-12 md:-left-8 select-none">
              03
            </span>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-3 md:mb-4">
                Finalize os Detalhes
              </h3>
              <p className="text-white/70 font-body text-sm md:text-base">
                Confirme sabores, data de entrega e deposito para garantir o seu
                lugar na nossa cozinha boutique.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-24 text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto bg-tertiary text-on-tertiary px-8 md:px-12 py-5 md:py-6 rounded-full text-base md:text-lg font-bold uppercase tracking-widest hover:bg-tertiary-container transition-all shadow-2xl">
              Encomendar Agora
            </button>
          </a>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top"></div>
    </section>
  );
}
