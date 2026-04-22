import Link from "next/link";

type OrderStepsSectionProps = {
  whatsappLink: string;
};

export default function OrderStepsSection({
  whatsappLink,
}: OrderStepsSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-tertiary-fixed font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            Processo
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6">
            Como fazer a sua encomenda
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="relative pl-6 md:pl-0">
            <span className="text-7xl md:text-9xl font-headline font-black text-white/20 absolute -top-8 -left-2 md:-top-12 md:-left-8 select-none">
              01
            </span>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-3 md:mb-4">
                Escolha o que deseja
              </h3>
              <p className="text-white/70 font-body text-sm md:text-base">
                Veja os exemplos no site ou diga exatamente o que pretende:
                bolo, doces ou salgados.
              </p>
            </div>
          </div>
          <div className="relative pl-6 md:pl-0">
            <span className="text-7xl md:text-9xl font-headline font-black text-white/20 absolute -top-8 -left-2 md:-top-12 md:-left-8 select-none">
              02
            </span>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-3 md:mb-4">
                Fale pelo WhatsApp
              </h3>
              <p className="text-white/70 font-body text-sm md:text-base">
                Envie uma mensagem com o seu pedido para receber preço e
                disponibilidade.
              </p>
            </div>
          </div>
          <div className="relative pl-6 md:pl-0">
            <span className="text-7xl md:text-9xl font-headline font-black text-white/20 absolute -top-8 -left-2 md:-top-12 md:-left-8 select-none">
              03
            </span>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-3 md:mb-4">
                Confirme a encomenda
              </h3>
              <p className="text-white/70 font-body text-sm md:text-base">
                Combine os detalhes, data de entrega e finalize a sua encomenda.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-24 text-center">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-surface-container-high text-on-surface px-6 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all duration-300 text-sm active:scale-95"
          >
            Fazer Encomenda no WhatsApp
          </Link>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top"></div>
    </section>
  );
}
