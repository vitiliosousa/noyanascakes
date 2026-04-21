export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <div className="relative z-10 p-2 md:p-4 bg-white shadow-2xl rounded-2xl transform lg:-rotate-3">
            <img
              alt="Referencia da Marca"
              className="rounded-xl w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQbnuyo2Y1jib3FwLYWYUd-G0R-S41LQTpE7raFRratVcvtYg-pYU7rg1e7q8H2tLNiyZjQVH-9SAn6eX32WqNAxgEl19yi8do24Si4jG0i4Li6rdM3xF-83u9eTEyCs1Iv0WYDaLE-ym2fU_TpFNgU7YL3vkDWGwvxd7nsfPqfNZ4jrACdGr0ybjzG8uPCMPsXK2J_-GuEOcxNjzJlDQeaJ9U5gs3wX6mDfFQ6GG_jppYTmZsm0tmpV-AcWbr6JlT-0wTw9pfHcce"
            />
          </div>
          <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 border-[12px] md:border-[20px] border-tertiary-container rounded-full opacity-20 -z-0"></div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-tertiary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            Nossa Historia
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface mt-4 md:mt-6 mb-8 md:mb-10 leading-tight">
            {" "}
            Arte no Coracao de Maputo
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-on-surface-variant font-body leading-relaxed text-left">
            <p>
              Fundada no principio de que a sobremesa deve ser uma experience
              multissensorial, a Noyana's Cakes comecou numa pequena cozinha
              domestica com uma visao unica: casar as tecnicas tradicionais da
              pastelaria europeia com os sabores vibrantes de Mocambique.
            </p>
            <p>
              Recusamo-nos a usar conservantes artificiais ou misturas
              comerciais. Nossa ganache e feita de chocolate amargo premium,
              nossas frutas sao adquiridas de produtores locais no auge da
              maturacao, e nossos detalhes em ouro de assinatura sao aplicados
              a mao para garantir que cada criacao seja uma obra-prima.
            </p>
          </div>
          <div className="mt-10 md:mt-12 grid grid-cols-2 gap-4 md:gap-8 text-center lg:text-left">
            <div>
              <span className="block text-3xl md:text-4xl font-headline font-bold text-primary">
                100%
              </span>
              <span className="text-[10px] md:text-sm font-label uppercase tracking-widest text-on-tertiary-fixed-variant">
                Ingredientes Naturais
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-headline font-bold text-primary">
                2.5k+
              </span>
              <span className="text-[10px] md:text-sm font-label uppercase tracking-widest text-on-tertiary-fixed-variant">
                Bolos Entregues
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
