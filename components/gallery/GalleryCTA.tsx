import Link from "next/link";

export default function GalleryCTA() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma encomenda de bolo personalizado.",
  );
  const whatsappLink = `https://wa.me/258848074445?text=${whatsappMessage}`;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 my-20 md:my-32">
      <div className="bg-surface-container rounded-3xl p-8 sm:p-12 md:p-24 text-center relative overflow-hidden shadow-[0_32px_48px_-12px_rgba(50,18,15,0.04)]">
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-tertiary-container/20 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-primary-container/10 rounded-full blur-3xl -ml-24 -mb-24 md:-ml-32 md:-mb-32"></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 max-w-2xl mx-auto leading-tight font-headline text-on-surface relative z-10">
          Pronto para transformar a sua visão em realidade?
        </h2>
        <p className="text-on-surface-variant text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto font-body relative z-10">
          Cada bolo na nossa galeria começou com uma conversa. Entre em contacto
          hoje para iniciarmos o design do seu bolo personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center relative z-10">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-linear-to-r from-primary to-primary-container text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
          >
            Iniciar Encomenda
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto bg-surface-container-highest text-on-surface px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </section>
  );
}
